import styles from './ComplianceStrip.module.css';

export default function ComplianceStrip(){
  return (
    <section className="section">
      <div className="container">
        <h2 style={{fontWeight:900, fontSize:'1.6rem'}}>For Auditors & Banks</h2>
        <div className={styles.strip}>
          <div className={styles.row}>
            <strong>Export Evidence</strong>
            <span>Contract/SOW → Commercial Invoice → SWIFT/MT103 → PRC (Proceeds Realization) → Form‑A. We keep a single audit folder per invoice.</span>
          </div>
          <div className={styles.row}>
            <strong>Banking</strong>
            <span>AD bank current account (BD). ERQ supported (if requested). We don’t use personal accounts for exports.</span>
          </div>
          <div className={styles.row}>
            <strong>Privacy</strong>
            <span>RRWeb‑style session capture with PII masking; data retention by contract; recordings with consent and DNC respect.</span>
          </div>
          <div className={styles.row}>
            <strong>Certificates</strong>
            <span>BASIS membership maintained. Annual income tax return filed. Tax Exemption Certificate (ICT) obtained when applicable.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
