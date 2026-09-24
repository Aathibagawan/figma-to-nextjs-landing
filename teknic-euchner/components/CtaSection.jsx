import styles from "./CtaSection.module.css";
import Button from "./Button";

export default function CtaSection() {
  return (
    <section className={styles.section} aria-label="Get in touch">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Let&apos;s Find the Right Solution for Your Application.</h2>

        <div className={styles.body}>
          <hr className={styles.rule} />
          <p className={styles.description}>
            Whether you&apos;re designing a new machine, upgrading an existing system or
            looking for a reliable replacement, our team can help you identify the right
            control gear for your requirements.
          </p>
        </div>

        <div className={styles.actions}>
          <Button variant="outline" href="#contact">
            Talk to an Expert
          </Button>
          <Button variant="primary" href="#products">
            Explore Our Products
          </Button>
        </div>
      </div>
    </section>
  );
}
