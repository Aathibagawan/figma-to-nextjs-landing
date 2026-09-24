import styles from "./WhyUsSection.module.css";
import Icon from "./Icon";
import { FEATURES } from "../data/content";

export default function WhyUsSection() {
  return (
    <section className={styles.section} aria-label="Why Teknic Euchner">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Why Teknic Euchner</h2>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <div className={styles.card} key={feature.title}>
              <div className={styles.cardTop}>
                <p className={styles.cardTitle}>{feature.title}</p>
                <span className={styles.iconBadge}>
                  <Icon name={feature.icon} size={20} />
                </span>
              </div>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
