import styles from "./IntroSection.module.css";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function IntroSection() {
  return (
    <section className={styles.section} aria-label="Engineering you can rely on">
      <div className={styles.inner}>
        <SectionHeading
          theme="light"
          title={
            <>
              Engineering You Can Rely On.
              <br />
              Experience You Can Trust.
            </>
          }
          leftExtra={<Button variant="primary">Discover Teknic Euchner</Button>}
          description={
            <>
              <p>
                Since 1989, <strong>Teknic Euchner</strong> has been building its expertise
                around one simple principle:{" "}
                <strong>
                  industrial components should perform reliably, every time they are called
                  upon.
                </strong>
              </p>
              <p>
                With the engineering know-how of Euchner Germany and decades of manufacturing
                experience in India, we develop control gear and sensing solutions for
                demanding industrial applications.
              </p>
              <p>
                From machine positioning and object detection to switching and
                safety-related applications, our products are built to deliver consistent
                performance where it matters most.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
