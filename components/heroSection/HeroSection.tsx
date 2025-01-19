import styles from './HeroSection.module.css';
import { CiLocationArrow1 } from "react-icons/ci";
import Image from 'next/image';

export const HeroSection = () => {
    return (
        <section id='hero' className={styles.heroSection}>
            <div className="container" style={{ marginTop: '7rem' }}>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>Computer Vision Community</h1>
                            <p className={styles.heroText}>Collaborate with experts, access a wealth of resources, and stay ahead with the latest advancements in computer vision, AI, and machine learning technologies.</p>
                            <button className={styles.heroButton}>
                                Get Started <CiLocationArrow1 className={styles.heroButtonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className={styles.heroImage} style={{ marginTop: '2rem' }}>
                            <Image
                                src="https://www.kaggle.com/static/images/home/logged-out/hero-illo@3x.png"
                                alt="hero-image"
                                layout="responsive"
                                width={1200}
                                height={800}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
