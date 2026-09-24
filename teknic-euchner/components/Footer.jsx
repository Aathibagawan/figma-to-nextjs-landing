import styles from "./Footer.module.css";
import Button from "./Button";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className={styles.footer} id="dealers">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <h2 className={styles.topHeading}>Looking for Teknic Euchner Products?</h2>

          <div className={styles.topRight}>
            <hr className={styles.rule} />
            <p>
              Find an authorised dealer near you and get connected with the right product
              for your application.
            </p>
            <Button variant="primary" href="#dealers">
              Find a Dealer
            </Button>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.brandCol}>
            <p className={styles.tagline}>Sense. Switch. Control. Protect.</p>
            <p className={styles.brandName}>
              <span>Teknic</span> Euchner
            </p>
            <p className={styles.brandDesc}>
              Industrial control gear engineered for reliable performance.
            </p>
          </div>

          <div className={styles.linkCol}>
            <hr className={styles.rule} />
            <p className={styles.colTitle}>Quick Links</p>
            <nav className={styles.linkList} aria-label="Footer">
              {FOOTER_LINKS.map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.linkCol} id="contact">
            <hr className={styles.rule} />
            <p className={styles.colTitle}>Contact</p>
            <div className={styles.contactList}>
              <p>No.64, 5th Cross, Electronics City Bengaluru 560 100 Karnataka, India.</p>
              <p>+91 80 28522717</p>
              <p>marketing@teknic-euchner.co.in</p>
              <p>www.teknic-euchner.co.in</p>
            </div>
          </div>

          <div className={styles.linkCol}>
            <hr className={styles.rule} />
            <p className={styles.colTitle}>Follow Us</p>
            <div className={styles.socialRow}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fillOpacity="0.001" />
                    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">
                      {social.label[0]}
                    </text>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2026 Teknic Euchner</p>
          <p>Designed by Cojective</p>
          <p>Terms &amp; Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
