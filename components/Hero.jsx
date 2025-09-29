import styles from './Hero.module.css';

export default function Hero(){
  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <h1 className={styles.title}>
          Premium <span className={styles.gradient}>Software & AI</span>
        </h1>
        <p className={styles.subtitle}>
          Frontend, backend, DevOps to deployment, Blockchain, AI chatbots, call‑center VA, Trading & CRM systems —
           Premium execution, measurable ROI.
        </p>
        <div className={styles.actions}>
          <a className="btn" href="#contact">Start a Project</a>
          {/* <a className="btn outline" href="/compliance">See Compliance</a> */}
        </div>
        <div className={styles.kpis}>
          <div className={styles.kpi}><strong>After sales Service</strong><div>Monthly maintenance after delivery</div></div>
          <div className={styles.kpi}><strong>&lt;24h</strong><div>Onboarding to first value</div></div>
          <div className={styles.kpi}><strong>Custom</strong><div>Next Gen Software</div></div>
        </div>
        <div className={styles.marquee}>
          <span className="badge">React/Next.js</span>
          <span className="badge">Node.js</span>
          <span className="badge">Python</span>
          <span className="badge">Golang</span>
          <span className="badge">Rust</span>
          <span className="badge">Solidity</span>
          <span className="badge">PineScript</span>
          <span className="badge">AI · Chatbots</span>
          <span className="badge">DevOps · Cloud</span>
          <span className="badge">CRM · APIs</span>
          <span className="badge">Voice/Call Center VA</span>
          <span className="badge">RRWeb‑style capture (PII‑safe)</span>
          <span className="badge">Trustedforms‑style verification</span>
        </div>
      </div>
    </section>
  );
}
