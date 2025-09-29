import styles from './Footer.module.css';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/logo.svg" alt="Nextera logo"/><span>Nextera Software</span>
          </div>
          <div className={styles.links}>
            <a href="/services">Services</a>
            {/* <a href="/compliance">Compliance</a> */}
            <a href="#contact">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
        <div style={{marginTop:'1rem'}}>© {new Date().getFullYear()} Nextera Software. All rights reserved.</div>
      </div>
    </footer>
  );
}
