# Nextera Software — Export-Ready Site (Next.js, JS only)

**Stack**: Next.js (App Router), React 18, plain JavaScript (no TypeScript), CSS Modules (component-scoped).  
**Node**: Works on Node.js 18/20/22.  
**Goal**: Premium site for international clients **and** Bangladesh compliance audiences (BASIS, NBR, Bangladesh Bank, AD banks like BRAC Bank).

## Quick start
```bash
npm install
npm run dev   # http://localhost:3000
npm run build && npm start
```

## Notes
- **Contact form** posts to `/api/lead` and appends valid emails to `data/leads.json`. For serverless platforms, replace with a DB or email service.
- Color theme: white / soft pink background, blue accents.
- All components are plain JS + CSS Modules. No TypeScript.

## Structure
```
app/
  layout.jsx       # Metadata, layout shell
  page.jsx         # Homepage (services + compliance highlights + contact form)
  globals.css      # Base/theme tokens
  compliance/page.jsx
  services/page.jsx
  api/lead/route.js
components/
  ...
public/
  logo.svg
data/
  leads.json       # created at runtime (ignored in git)
```

## Compliance copy
This site includes sections and language that help satisfy cross-checks for **BASIS/NBR/BB/AD banks** when they visit:
- Clear **service scope**, **deliverables**, and **process**.
- "**For Auditors & Banks**" section with export documentation list (PRC, Form-A, invoices, SWIFT).
- Plain-English **privacy** stance (e.g., RRWeb-like capture guidance with PII masking).

## Deployment
- Self-hosted Node: `npm run build && npm start`.
- Docker: the build output is `output: 'standalone'` ready.
- Vercel/Netlify/Fly: Works, but `/api/lead` file writes are not durable; swap for a DB.

---

© Nextera Software. Built for premium international clients with Bangladesh export compliance in mind.
# nextera-software
# nextera-software
