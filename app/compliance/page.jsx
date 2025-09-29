export const metadata = {
  title: 'Compliance · Nextera Software',
  description: 'For auditors and banks: export documentation map (PRC, Form‑A, SWIFT, invoices), privacy, and bank details.'
};

export default function CompliancePage(){
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 style={{fontSize:'2rem', fontWeight:900}}>Compliance</h1>
          <p style={{color:'var(--muted)', marginTop:'.6rem'}}>
            Everything your auditor or AD bank officer wants to see, organized as a single folder per invoice.
          </p>
          <div style={{display:'grid', gap:'1rem', marginTop:'1rem'}}>
            <div className="card">
              <h3>Export documentation pack (per receipt)</h3>
              <ul>
                <li>Signed Contract / SOW</li>
                <li>Commercial Invoice</li>
                <li>Client bank SWIFT (MT103) referencing invoice number</li>
                <li>Form‑A &amp; PRC from our AD bank</li>
                <li>Undertaking &amp; any bank forms (Form‑Ka/Kha/Ga/Gha)</li>
                <li>Deliverables index (links or zipped artifacts)</li>
              </ul>
            </div>
            <div className="card">
              <h3>Banking &amp; FX</h3>
              <p>Authorized Dealer (AD) bank current account in Bangladesh. ERQ sub‑account supported if requested by client.</p>
            </div>
            <div className="card">
              <h3>Privacy by design</h3>
              <p>RRWeb‑style capture with PII redaction; recordings with consent; DNC/spam compliance; retention &amp; deletion policies in contract.</p>
            </div>
            <div className="card">
              <h3>Certificates &amp; filings</h3>
              <ul>
                <li>BASIS membership (Associate/General)</li>
                <li>Annual Income Tax Return (Bangladesh)</li>
                <li>Tax Exemption Certificate (ICT) when applicable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <a className="btn" href="#contact">Request our audit checklist</a>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="container">
          <h2 style={{fontWeight:900, fontSize:'1.6rem'}}>Contact</h2>
          <form action="/api/lead" method="post" style={{display:'grid', gap:'.8rem', maxWidth:'560px'}}>
            <input className="input" type="email" name="email" placeholder="you@company.com" required />
            <button className="btn" type="submit">Request callback</button>
          </form>
        </div>
      </section>
    </>
  );
}
