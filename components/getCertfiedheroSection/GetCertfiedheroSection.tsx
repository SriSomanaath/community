import Image from 'next/image';
import styles from './GetCertfiedheroSection.module.css';

const GetCertfiedheroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Earn Industry-Recognized Certifications</h1>
          <p className={styles.heroSubtitle}>
            Boost your career with professional certifications in computer vision, AI, and deep learning.
          </p>
          <a href="#courses" className={styles.ctaButton}>Explore Courses</a>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/certification-hero.png"
            alt="Get Certified"
            width={500}
            height={500}
            layout="intrinsic"
          />
        </div>
      </div>
    </section>
  );
};

export default GetCertfiedheroSection;
