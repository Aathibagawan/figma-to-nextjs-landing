import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  title,
  description,
  leftExtra,
  theme = "light",
  className = "",
}) {
  const titleClass = theme === "dark" ? styles.titleDark : styles.titleLight;
  const descClass = theme === "dark" ? styles.descriptionDark : styles.descriptionLight;

  return (
    <div className={`${styles.row} ${className}`.trim()}>
      <div className={styles.left}>
        <h2 className={`${styles.title} ${titleClass}`}>{title}</h2>
        {leftExtra}
      </div>

      <div className={styles.right}>
        <hr className={styles.divider} />
        <div className={descClass}>{description}</div>
      </div>
    </div>
  );
}
