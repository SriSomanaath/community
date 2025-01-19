import React from 'react';
import Image from 'next/image';
import styles from './CourseFeatures.module.css';

export const CourseFeatures = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={`${styles.container} container`}>
                <div className={styles.textContent}>
                    <h2 className={styles.sectionTitle}>Course Features & Resources</h2>
                    <p className={styles.sectionDescription}>
                        Enhance your learning experience with these standout features and resources, designed to help you master the skills needed to excel in the field.
                    </p>
                    <div className={styles.featureItem}>
                        <h3 className={styles.featureTitle}>Expert-Led Tutorials</h3>
                        <p className={styles.featureDescription}>
                            Learn from industry professionals with years of experience in the field of computer vision and AI.
                        </p>
                    </div>
                    <div className={styles.featureItem}>
                        <h3 className={styles.featureTitle}>Comprehensive Course Material</h3>
                        <p className={styles.featureDescription}>
                            Access detailed notes, real-world examples, and hands-on projects to reinforce your knowledge.
                        </p>
                    </div>
                    <div className={styles.featureItem}>
                        <h3 className={styles.featureTitle}>Flexible Learning Options</h3>
                        <p className={styles.featureDescription}>
                            Study at your own pace with on-demand video lectures, interactive quizzes, and lifetime access.
                        </p>
                    </div>
                </div>
                <div className={styles.imageContent}>
                    <Image src="/course-features.png" alt="Course Features" width={450} height={450} className={styles.image} />
                </div>
            </div>
        </section>
    );
};

export default CourseFeatures;
