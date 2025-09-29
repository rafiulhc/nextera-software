import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function isValidEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req){
  try{
    const body = await req.json().catch(async () => {
      // Support form POST (application/x-www-form-urlencoded)
      const form = await req.formData();
      const email = form.get('email') || '';
      return { email };
    });
    const email = (body?.email || '').trim();
    const hp = (body?.hp || '').trim();
    if(!isValidEmail(email) || hp){ 
      return NextResponse.json({ ok:false }, { status: 400 });
    }
    const dataDir = path.join(process.cwd(), 'data');
    const file = path.join(dataDir, 'leads.json');
    await fs.promises.mkdir(dataDir, { recursive: true });
    let existing = [];
    try {
      const raw = await fs.promises.readFile(file, 'utf-8');
      existing = JSON.parse(raw);
    } catch{}
    existing.push({ email, ts: new Date().toISOString() });
    await fs.promises.writeFile(file, JSON.stringify(existing, null, 2));
    return NextResponse.json({ ok: true });
  }catch(e){
    console.error('Lead error', e);
    return NextResponse.json({ ok:false }, { status: 500 });
  }
}
