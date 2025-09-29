import styles from './Services.module.css';

const SERVICES = [
  { title: 'Frontend & UX', text: 'React/Next.js SPAs, design systems, premium UI with accessibility and performance budgets.' },
  { title: 'Backend & APIs', text: 'Node.js, Python, Go, Rust — REST/GraphQL, auth, rate‑limits, observability, billing.' },
  { title: 'DevOps & Cloud', text: 'IaC, CI/CD, containers, autoscaling, blue/green deploys, cost guardrails.' },
  { title: 'AI & Chatbots', text: 'Voice & text agents, RAG pipelines, call‑center VA with summaries and ICS scheduling.' },
  { title: 'Blockchain & Solidity', text: 'Smart contracts, audits, indexers, wallets, on‑chain analytics.' },
  { title: 'Trading & PineScript', text: 'Algos, strategy backtests, broker integrations, risk controls.' },
  { title: 'CRM & Automation', text: 'Lead flows, TrustedForms‑style validation, RRWeb‑style capture with PII masking.' },
  { title: 'Voice Ops', text: 'After‑hours routing, emergency trees, spam defense, recordings with consent.' },
  { title: 'On Demand', text: 'Scalable API, custom backend, deployment, maintenance.' }
];

export default function Services(){
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.sectionTitle}>What we do (and do best)</h2>
        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <div className={styles.item} key={i}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
