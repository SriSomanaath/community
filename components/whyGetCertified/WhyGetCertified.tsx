import styles from './WhyGetCertified.module.css';

const WhyGetCertified = () => {
  return (
    <section className={styles.whyCertifiedSection}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.sectionTitle}>Why Get Certified?</h2>
        <p className={styles.sectionSubtitle}>
          Elevate your career and gain a competitive edge in the rapidly growing fields of AI and Computer Vision.
        </p>
        <div className={styles.benefitsList}>
          <div className={styles.benefit}>
            <h3 className={styles.benefitTitle}>Industry Recognition</h3>
            <p className={styles.benefitDescription}>
              Stand out to employers with certifications backed by industry leaders.
            </p>
          </div>
          <div className={styles.benefit}>
            <h3 className={styles.benefitTitle}>Enhanced Skills</h3>
            <p className={styles.benefitDescription}>
              Gain in-depth knowledge and practical expertise in computer vision and AI.
            </p>
          </div>
          <div className={styles.benefit}>
            <h3 className={styles.benefitTitle}>Career Advancement</h3>
            <p className={styles.benefitDescription}>
              Unlock higher-paying roles and opportunities with validated skills.
            </p>
          </div>
          <div className={styles.benefit}>
            <h3 className={styles.benefitTitle}>Global Credibility</h3>
            <p className={styles.benefitDescription}>
              Earn credentials that are recognized and respected worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGetCertified;
