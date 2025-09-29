import styles from './Process.module.css';

const STEPS = [
  { t:'Discover', d:'Define goals, constraints, success metrics. Draft SOW & acceptance.' },
  { t:'Design', d:'Flows, data, interfaces. Security & privacy by design.' },
  { t:'Build', d:'Iterative delivery with reviews, tests, and clean handoffs.' },
  { t:'Deploy', d:'CI/CD, blue‑green, monitoring, on‑call. No‑drama release.' },
  { t:'Operate', d:'Monitor and Maintenance.' },
];

export default function Process(){
  return (
    <section className="section">
      <div className="container">
        <h2 style={{fontWeight:900, fontSize:'1.6rem'}}>How we deliver</h2>
        <div className={styles.timeline}>
          {STEPS.map((s,i)=> (
            <div key={i} className={styles.step}>
              <h3>{i+1}. {s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
