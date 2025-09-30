// pages/api/lead.js
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '').trim());

/**
 * Very small in-memory rate limit.
 * NOTE: This is ephemeral (serverless cold starts will reset). For production use Redis or a durable store.
 */
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60s
const RATE_LIMIT_MAX = 6; // max submissions per IP per window
global._leadRateMap = global._leadRateMap || new Map();

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
    // Basic rate limiting per IP (ephemeral)
    const now = Date.now();
    const entry = global._leadRateMap.get(ip) || { count: 0, start: now };
    if (now - entry.start < RATE_LIMIT_WINDOW_MS) {
      if (entry.count >= RATE_LIMIT_MAX) {
        return res.status(429).json({ error: 'Too many requests' });
      }
      entry.count += 1;
    } else {
      entry.count = 1;
      entry.start = now;
    }
    global._leadRateMap.set(ip, entry);

    // Accept both JSON and form body
    const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body || '{}');

    const email = (body.email || '').trim();
    const name = (body.name || '').trim();
    const message = (body.message || '').trim();
    const hp = (body.hp || '').trim(); // honeypot

    if (hp) {
      // Bot detected. Do not reveal details.
      console.warn('Honeypot filled from', ip);
      return res.status(400).json({ ok: false });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Build nice HTML email
    const fromDomain = process.env.EMAIL_DOMAIN || 'nexterasoftware.tech';
    const from = `Nextera Website <no-reply@${fromDomain}>`;
    const to = process.env.LEADS_RECEIVER;
    if (!process.env.RESEND_API_KEY || !to) {
      // Missing env: fallback to logging
      console.error('Missing RESEND_API_KEY or LEADS_RECEIVER env var. Lead:', { email, name, message, ip });
      return res.status(200).json({ ok: true, note: 'logged-only (missing env)' });
    }

    const userAgent = req.headers['user-agent'] || '';
    const html = `
      <div style="font-family: system-ui, -apple-system, Roboto, Inter, Arial; color:#0f172a;">
        <h2 style="color:#2563eb; margin-bottom:6px;">New lead from Nextera website</h2>
        <p><strong>Email:</strong> ${email}</p>
        ${name ? `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` : ''}
        ${message ? `<p><strong>Message:</strong><br/>${escapeHtml(message)}</p>` : ''}
        <hr/>
        <p style="color:#475569; font-size:13px;">IP: ${ip} • User-Agent: ${escapeHtml(userAgent)}</p>
        <p style="color:#999; font-size:12px;">Received: ${new Date().toISOString()}</p>
      </div>
    `;

    // Send via Resend HTTP API
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject: `Nextera website lead — ${email}`,
        html,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      console.error('Resend error', resp.status, text);
      // Fallback: accept but mark as queued (so site UX is fine) — logged to server logs
      return res.status(202).json({ ok: true, note: 'queued (email provider error)' });
    }

    // Success
    console.log('Lead email sent:', email, 'IP:', ip);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Lead handler error', err);
    return res.status(500).json({ ok: false });
  }
}

// small helper to avoid XSS in email body
function escapeHtml(s = '') {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
