import styles from './CTA.module.css';

export default function CTA(){
  return (
    <section className="section">
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.title}>Ready to ship premium software.</div>
          <div style={{display:'flex', gap:'.6rem', flexWrap:'wrap'}}>
            <a className="btn" href="#contact">Request a Quote</a>
            {/* <a className="btn outline" href="/compliance">Compliance details</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
