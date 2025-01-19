import Image from 'next/image';
import styles from './AboutCommunity.module.css';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import { PiCertificate } from "react-icons/pi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

export default function AboutCommunity() {
  return (
    <section>
            <div className='col-lg-12'>
            <div className={`${styles.contCard} container`}>
                <div className='row'>
                <div className='col-lg-6'>
                        <Image src="https://www.kaggle.com/static/images/home/logged-out/community-faces-desktop@2x.png" alt="Key Services" width={400} height={400} />
                    </div>
                    <div className='col-lg-6'>
                        <div>
                            <h3>Who are CV Community?</h3>
                        </div>
                        <div>
                            <p>
                            Kagglers come from all walks of life: students, seasoned professionals, and distinguished researchers. They use Kaggle to learn data science & ML, stay up-to-date on the latest techniques, and collaborate.
                            </p>
                        </div>
                    </div>
                </div>                
            </div>
      </div>
      <div className={`${styles.container} container`}>
        <div className="col-lg-6">
          <div className={styles.services}>
            <div className={styles.verticalLine}></div>

            <div className={styles.serviceItem}>
              <FaUsers className={styles.icon} />
              <div>
                <h3>Join the Community</h3>
                <p className='special_text'>Connect with like-minded professionals, share insights, and grow together.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <PiCertificate className={styles.icon} />
              <div>
                <h3>Get Certified</h3>
                <p className='special_text'>Boost your career with our industry-recognized certifications in computer vision, deep learning, and AI.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <FaBriefcase className={styles.icon} />
              <div>
                <h3>Find Jobs</h3>
                <p className='special_text'>Explore a curated list of job opportunities tailored for professionals in computer vision and AI.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <BsFillRocketTakeoffFill className={styles.icon} />
              <div>
                <h3>Hire Top Talent</h3>
                <p className='special_text'>Access a pool of qualified and skilled candidates ready to contribute to your team. Our platform makes finding and hiring top talent effortless.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styles.imgContainer}>
            <Image src="/dashboard.png" alt="Key Services" width={450} height={450} />
          </div>
        </div>
      </div>

    </section>
  );
}
