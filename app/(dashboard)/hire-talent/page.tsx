import styles from './page.module.css';
import FAQs from '@/components/faqs/FAQs';
import { JoinUsBanner } from '@/components/joinUsBanner/JoinUsBanner';
import Image from 'next/image';

export default function Page() {
    return (
        <div className='container-collapse'>
            <section>
                <div className={styles.container}>
                    <div className='col-12'>
                        <div><h1>The all-in-one platform to <br /> find & hire your team</h1></div>
                        <div><p>Post jobs, track applicants, and build your dream team.</p></div>
                        <div><button className={styles.button}>
                           <a href="/get-details">Create Dashboard</a></button></div>
                    </div>
                    <div className='col-md-12'>
                        <div className={styles.dashboardContainer}></div>
                    </div>
                </div>
            </section>
            <section className='contGrad'>
                <div className='container'>
                    <div className={`'col-12' ${styles.statsContainer}`}>
                        <div className='col-lg-4'>
                            <div>
                                <div><h3>10+</h3></div>
                                <div><span>startups</span></div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div>
                                <div><h3>1000+</h3></div>
                                <div><span>Hiring Patners</span></div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div>
                                <div><h3>18k+</h3></div>
                                <div><span>Students</span></div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>
            <section className='contGrad'>
                <div className={`${styles.Sectioncontainer} container`}>
                    <div className="col-lg-6">
                        <div className={styles.services}>
                            <div className={styles.serviceItem}>
                                <div>
                                    <h3>Simplified Job Posting</h3>
                                    <p className='special_text'>Easily post jobs with our user-friendly interface. Save time and effort by reaching a broad audience with just a few clicks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.imgContainer}>
                            <Image src="/dashboard.png" alt="Simplified Job Posting" width={450} height={450} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='contGrad'>
                <div className={`${styles.Sectioncontainer} container`}>
                    <div className="col-lg-6">
                        <div className={styles.imgContainer} style={{ textAlign: 'start' }} >
                            <Image src="/dashboard.png" alt="AI-Powered Recommendations" width={450} height={450} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '0'}}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.services}>
                            <div className={styles.serviceItem}>
                                <div>
                                    <h3>AI-Powered Recommendations</h3>
                                    <p className='special_text'>Our platform uses advanced AI algorithms to recommend the best candidates for your job openings, ensuring faster and more accurate hiring decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='contGrad'>
                <div className={`${styles.Sectioncontainer} container`}>

                    <div className="col-lg-6">
                        <div className={styles.services}>
                            <div className={styles.serviceItem}>
                                <div>
                                    <h3>Real-Time Tracking</h3>
                                    <p className='special_text'>Monitor the progress of your job postings and applications in real-time. Stay informed and make timely decisions with our intuitive tracking tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.imgContainer}>
                            <Image src="/dashboard.png" alt="Real-Time Tracking" width={450} height={450} />
                        </div>
                    </div>
                </div>
            </section>
            <FAQs />
            <JoinUsBanner />
        </div>
    );
}
