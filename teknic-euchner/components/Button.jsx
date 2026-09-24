import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...rest
}) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();
  const shineOffset = variant === "primary" ? "left-[70%]" : "";

  const content = (
    <>
      <span className={styles.shine} style={{ left: "72%" }} aria-hidden="true" />
      <span style={{ position: "relative" }}>{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
