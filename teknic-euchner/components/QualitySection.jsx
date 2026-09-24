import Image from "next/image";
import styles from "./QualitySection.module.css";
import Button from "./Button";

export default function QualitySection() {
  return (
    <section className={styles.section} aria-label="Quality commitment">
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <Image
            src="/images/Quality inspection photo.png"
            alt="Quality inspection at Teknic Euchner"
            fill
            sizes="(max-width: 1199px) 100vw, 585px"
            className={styles.image}
          />
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.heading}>Quality Isn&apos;t an Inspection. It&apos;s a Commitment.</h2>

          <div className={styles.body}>
            <hr className={styles.rule} />
            <div className={styles.copy}>
              <p>For industrial components, quality is about more than meeting a specification.</p>
              <p>
                It&apos;s about consistent performance. It&apos;s about dependable operation.
                It&apos;s about building components that customers can specify with
                confidence.
              </p>
              <p>
                At Teknic Euchner, quality is built into our approach to product
                development, manufacturing and customer service.
              </p>
            </div>
          </div>

          <Button variant="primary">Discover Teknic Euchner</Button>
        </div>
      </div>
    </section>
  );
}
