import Services from '../../components/Services';
import CTA from '../../components/CTA';
import Contact from '../../components/Contact';

export default function ServicesPage(){
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 style={{fontSize:'2rem', fontWeight:900}}>Services</h1>
          <p style={{color:'var(--muted)', marginTop:'.6rem'}}>
            From frontend polish to backend scale, from AI agents to trading engines — we deliver end‑to‑end.
          </p>
        </div>
      </section>
      <Services />
      <CTA />
      <Contact />
    </>
  );
}
