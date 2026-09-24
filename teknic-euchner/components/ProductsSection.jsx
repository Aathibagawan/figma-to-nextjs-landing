import Image from "next/image";
import styles from "./ProductsSection.module.css";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { PRODUCTS } from "../data/content";

export default function ProductsSection() {
  return (
    <section className={styles.section} id="products" aria-label="Products">
      <div className={styles.inner}>
        <SectionHeading
          theme="light"
          className={styles.heading}
          title="The Right Control Gear for Every Application."
          description={
            <p>
              Industrial machines depend on components that can sense movement, detect
              position, control processes and respond when it matters. Teknic Euchner offers
              a focused range of industrial products engineered for reliable operation across
              demanding applications.
            </p>
          }
        />

        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <article className={styles.card} key={product.label}>
              <div className={styles.top}>
                <hr className={styles.rule} />
                <p className={styles.label}>{product.label}</p>

                <div className={styles.imageWrap}>
                  <span className={styles.bracket + " " + styles.bracketTl} aria-hidden="true" />
                  <span className={styles.bracket + " " + styles.bracketTr} aria-hidden="true" />
                  <span className={styles.bracket + " " + styles.bracketBl} aria-hidden="true" />
                  <span className={styles.bracket + " " + styles.bracketBr} aria-hidden="true" />
                  <Image
                    src={product.image}
                    alt={product.label}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>
              </div>

              <div className={styles.bottom}>
                <div className={styles.copy}>
                  <p className={styles.title}>{product.title}</p>
                  <p className={styles.description}>{product.description}</p>
                </div>
                <Button variant="primary">{product.cta}</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
