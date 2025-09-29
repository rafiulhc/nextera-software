import { NextResponse } from 'next/server';

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req) {
  try {
    const body = await req.json().catch(async () => {
      const form = await req.formData();
      return { email: form.get('email') || '' };
    });

    const email = (body?.email || '').trim();
    const hp = (body?.hp || '').trim();

    // basic validation
    if (!isValidEmail(email) || hp) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // 🔹 dummy no-op: just log to console
    console.log('New lead captured:', email);

    // Always respond ok so Vercel doesn’t throw 500
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Lead error', e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
