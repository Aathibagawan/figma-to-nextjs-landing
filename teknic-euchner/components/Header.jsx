import styles from "./Header.module.css";
import Button from "./Button";
import { NAV_LINKS } from "../data/content";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.bar}>
        <div className={styles.inner}>
          <p className={styles.logo}>
            TEKNIC<span> EUCHNER</span>
          </p>

          <nav className={styles.nav} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
                {link.hasChevron && (
                  <svg
                    className={styles.chevron}
                    viewBox="0 0 5 9"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M0.5 0.5L4.5 4.5L0.5 8.5" stroke="currentColor" />
                  </svg>
                )}
              </a>
            ))}
          </nav>
        </div>

        <Button href="#contact" variant="primary" className={styles.getInTouch}>
          Get in Touch
        </Button>
      </div>
    </header>
  );
}
