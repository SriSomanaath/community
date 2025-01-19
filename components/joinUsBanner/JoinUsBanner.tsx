import styles from './JoinUsBanner.module.css';

export const JoinUsBanner = () => {
    return (
        <section className={`${styles.bannerSection}`}>
            <div className={`${styles.bannerContainer} container`}>
                <div className='col-lg-8'>
                    <h1 className={styles.bannerHeading}>Hire from <br />Computer Vision Community </h1>
                </div>
                <div className='col-lg-4' style={{ textAlign: 'end' }}>
                    <button className={styles.ctaButton}>Create Dashboard</button>
                </div>
            </div>
        </section>
    );
};
