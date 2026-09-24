import styles from "./ApplicationsSection.module.css";
import SectionHeading from "./SectionHeading";
import { APPLICATIONS } from "../data/content";

export default function ApplicationsSection() {
  return (
    <section className={styles.section} aria-label="Applications">
      <div className={styles.inner}>
        <SectionHeading
          theme="light"
          className={styles.heading}
          title="Designed for Machines. Trusted Across Industries."
          description={
            <p>
              Our products support the machines and systems that keep modern manufacturing
              moving.
            </p>
          }
        />

        <div className={styles.list}>
          {APPLICATIONS.map((item) => (
            <div className={styles.row} key={item.number}>
              <span className={styles.number}>{item.number}</span>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.description}>{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
