import styles from './CourseCatalog.module.css';

const CourseCatalog = () => {
  return (
    <section className={styles.courseCatalogSection}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.sectionTitle}>Explore Our Course Catalog</h2>
        <p className={styles.sectionSubtitle}>
          Dive into our expertly crafted courses designed for all levels—from beginners to advanced professionals.
        </p>
        <div className={styles.courseList}>
          <div className={styles.courseRow}>
            <div className={styles.courseInfo}>
              <h3 className={styles.courseName}>Introduction to Computer Vision</h3>
              <p className={styles.courseDescription}>
                Learn the basics of computer vision and get hands-on experience with image processing techniques.
              </p>
            </div>
            <div className={styles.courseDetails}>
              <p className={styles.duration}>Duration: 6 weeks</p>
              <p className={styles.level}>Level: Beginner</p>
            </div>
          </div>
          <div className={styles.courseRow}>
            <div className={styles.courseInfo}>
              <h3 className={styles.courseName}>Deep Learning for Vision</h3>
              <p className={styles.courseDescription}>
                Dive into neural networks and learn how to build models for image recognition and object detection.
              </p>
            </div>
            <div className={styles.courseDetails}>
              <p className={styles.duration}>Duration: 8 weeks</p>
              <p className={styles.level}>Level: Intermediate</p>
            </div>
          </div>
          <div className={styles.courseRow}>
            <div className={styles.courseInfo}>
              <h3 className={styles.courseName}>Advanced AI for Computer Vision</h3>
              <p className={styles.courseDescription}>
                Master state-of-the-art AI techniques to tackle complex computer vision challenges.
              </p>
            </div>
            <div className={styles.courseDetails}>
              <p className={styles.duration}>Duration: 10 weeks</p>
              <p className={styles.level}>Level: Advanced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
