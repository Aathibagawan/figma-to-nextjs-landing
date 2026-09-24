import Image from "next/image";
import styles from "./AboutSection.module.css";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className={styles.section} id="about" aria-label="About Teknic Euchner">
      <div className={styles.inner}>
        <SectionHeading
          theme="dark"
          className={styles.heading}
          title="German Know-How. Indian Manufacturing. Industrial Confidence."
          description={
            <>
              <p>
                Teknic Euchner brings together the engineering heritage of Euchner Germany
                with manufacturing and market expertise in India.
              </p>
              <p>
                Established in 1989, the company has grown with the changing needs of Indian
                industry while remaining focused on quality, precision and dependable control
                solutions.
              </p>
            </>
          }
        />

        <div className={styles.imageWrap}>
          <Image
            src="/images/Facility  team photo.png"
            alt="Teknic Euchner facility and team"
            fill
            sizes="(max-width: 1199px) 100vw, 1280px"
            className={styles.image}
          />
        </div>

        <div className={styles.ctaRow}>
          <Button variant="primary">Discover Teknic Euchner</Button>
        </div>
      </div>
    </section>
  );
}
