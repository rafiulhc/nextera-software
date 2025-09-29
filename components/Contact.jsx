'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact(){
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'ok' | 'err'

  const submit = async (e)=>{
    e.preventDefault();
    setStatus(null);
    try{
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, hp: '' }) // honeypot left blank
      });
      if(r.ok){ setStatus('ok'); setEmail(''); }
      else { setStatus('err'); }
    }catch(e){
      setStatus('err');
    }
  };

  return (
    <section id="contact" className={`section ${styles.wrap}`}>
      <div className="container">
        <h2 style={{fontWeight:900, fontSize:'1.6rem'}}>Contact us</h2>
        <p className={styles.small}>Drop your email. We’ll get back within one business day.</p>
        <form className={styles.form} onSubmit={submit}>
          <input
            className="input"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            aria-label="Email address"
          />
          {/* Honeypot field for bots */}
          <input type="text" name="company" style={{display:'none'}} tabIndex={-1} aria-hidden="true" />
          <button className="btn" type="submit">Request callback</button>
        </form>
        {status==='ok' && <div className={styles.success}>Thanks! We’ll be in touch shortly.</div>}
        {status==='err' && <div className={styles.error}>Something went wrong. Email us at hello@nextera.software</div>}
      </div>
    </section>
  );
}
