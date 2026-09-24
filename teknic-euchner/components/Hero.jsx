import styles from "./Hero.module.css";
import Button from "./Button";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Introduction">
      <video
        className={styles.bgVideo}
        src="/video/Hero background Image, Video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <span className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>Precision That Keeps Industry Moving.</h1>
            <p className={styles.subheading}>
              Engineered sensing, switching and control solutions for machines that demand
              reliability.
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

        <div className={styles.right}>
          <hr className={styles.divider} />
          <p className={styles.rightText}>
            For over three decades, Teknic Euchner has been developing and manufacturing
            industrial control gear designed for precision, durability and dependable
            performance.
          </p>
        </div>
      </div>
    </section>
  );
}
