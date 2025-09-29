import Hero from '../components/Hero';
import Services from '../components/Services';
import ComplianceStrip from '../components/ComplianceStrip';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function Page(){
  return (
    <>
      <Hero />
      <Services />
      {/* <ComplianceStrip /> */}
      <Process />
      <CTA />
      <Contact />
    </>
  );
}
