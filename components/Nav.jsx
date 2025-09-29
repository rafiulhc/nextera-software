import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav(){
  return (
    <div className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img src="/logo.svg" alt="Nextera logo"/>
          <span>Nextera Software</span>
          <span className="badge">Export-Ready</span>
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          {/* <Link href="/compliance">Compliance</Link> */}
          <a href="#contact">Contact</a>
          <Link className={`btn ${styles.cta}`} href="#contact">Get a Quote</Link>
        </div>
      </div>
    </div>
  );
}
