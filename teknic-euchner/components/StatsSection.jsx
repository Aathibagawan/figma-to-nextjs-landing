import styles from "./StatsSection.module.css";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { STATS } from "../data/content";

export default function StatsSection() {
  return (
    <section className={styles.section} aria-label="Company experience">
      <div className={styles.inner}>
        <SectionHeading
          theme="dark"
          title="Decades of Engineering. Built for Industry."
          description={
            <p>
              Numbers and claims should be updated with the company&apos;s verified current
              figures before publishing.
            </p>
          }
        />

        <div className={styles.grid}>
          {STATS.map((stat) => (
            <div className={styles.card} key={stat.value}>
              <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true" />
              <span className={`${styles.corner} ${styles.cornerTr}`} aria-hidden="true" />
              <span className={`${styles.corner} ${styles.cornerBl}`} aria-hidden="true" />
              <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true" />
              <Icon name={stat.icon} className={styles.icon} size={44} />
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
