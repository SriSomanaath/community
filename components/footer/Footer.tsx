import React from 'react';
import { MdHome, MdEmail, MdPhone, MdPrint } from 'react-icons/md';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.contentSection}>
                <div className={`${styles.container} container`}>
                    <div className={styles.col}>
                        <h6 className={styles.title}>
                            <Image src={'/Logo_2.png'} height={250} width={250} alt='logo'/>
                        </h6>
                        <p>
                            The world’s most trustworthy destination for learning Computer Vision, Deep Learning, and AI.
                        </p>
                        <hr style={{border: '1px solid rgb(6, 6, 6)', marginBottom: '20px'}}/>
                        <p><a href="#" className={styles.link}>OpenCV Forum</a></p>
                        <p><a href="#" className={styles.link}>AI Research</a></p>
                        <p><a href="#" className={styles.link}>Community Blog</a></p>
                        <p><a href="#" className={styles.link}>Events & Webinars</a></p>
                        <p><a href="#" className={styles.link}>OpenCV Forum</a></p>
                        <p><a href="#" className={styles.link}>AI Research</a></p>
                        <p><a href="#" className={styles.link}>Community Blog</a></p>
                        <p><a href="#" className={styles.link}>Events & Webinars</a></p>
                        <hr style={{border: '1px solid rgb(6, 6, 6)', marginBottom: '20px'}}/>
                        <button className={styles.button}>Get in Touch</button>
                    </div>

                    <div className={styles.col}>
                        <h6 className={styles.title}>AI & Computer Vision</h6>
                        <p><a href="#" className={styles.link}>AI Certifications</a></p>
                        <p><a href="#" className={styles.link}>Mock Tests</a></p>
                        <p><a href="#" className={styles.link}>Courses</a></p>
                        <p><a href="#" className={styles.link}>Career Pathways</a></p>
                        <p><a href="#" className={styles.link}>AI Certifications</a></p>
                        <p><a href="#" className={styles.link}>Mock Tests</a></p>
                        <p><a href="#" className={styles.link}>Courses</a></p>
                        <p><a href="#" className={styles.link}>Career Pathways</a></p>
                    </div>

                    <div className={styles.col}>
                        <h6 className={styles.title}>Jobs & Hiring</h6>
                        <p><a href="#" className={styles.link}>Job Portal</a></p>
                        <p><a href="#" className={styles.link}>AI Jobs</a></p>
                        <p><a href="#" className={styles.link}>Job Search</a></p>
                        <p><a href="#" className={styles.link}>Employer Dashboard</a></p>
                        <p><a href="#" className={styles.link}>Job Portal</a></p>
                        <p><a href="#" className={styles.link}>AI Jobs</a></p>
                        <p><a href="#" className={styles.link}>Job Search</a></p>
                        <p><a href="#" className={styles.link}>Employer Dashboard</a></p>
                    </div>

                    <div className={styles.col}>
                        <h6 className={styles.title}>Contact</h6>
                        <p className={styles.contact}><MdHome className={styles.icon} /> California, US</p>
                        <p className={styles.contact}><MdEmail className={styles.icon} /> info@example.com</p>
                        <p className={styles.contact}><MdPhone className={styles.icon} /> +01 234 567 88</p>
                        <p className={styles.contact}><MdPrint className={styles.icon} /> +01 234 567 89</p>
                    </div>
                </div>
            </section>

            <div className={styles.copySection}>
                © 2021 Copyright: 
                <a href="https://example.com" className={styles.copyLink}> Example.com</a>
            </div>
        </footer>
    );
}
