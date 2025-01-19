import React from 'react';
import styles from './GetCertificate.module.css';
import { FaArrowRight } from 'react-icons/fa';

const aiCertifications = [
    {
        title: "Computer Vision Fundamentals",
        duration: "3 months",
        type: "Professional Certification",
        description: "Master the basics of computer vision, including image processing, feature detection, and classification.",
        icon: <div className={styles.iconCV}>CV</div>,
    },
    {
        title: "Deep Learning with PyTorch",
        duration: "4 months",
        type: "Professional Certification",
        description: "Learn to build and deploy deep learning models using PyTorch, covering CNNs, RNNs, and GANs.",
        icon: <div className={styles.iconDL}>DL</div>,
    },
    {
        title: "AI for Edge Devices",
        duration: "2 months",
        type: "Specialization",
        description: "Explore AI optimization techniques for deployment on edge devices like smartphones and IoT.",
        icon: <div className={styles.iconAI}>AI</div>,
    },
    {
        title: "AI in Healthcare",
        duration: "3 months",
        type: "Industry Certification",
        description: "Understand how AI is revolutionizing healthcare with applications in diagnostics, imaging, and more.",
        icon: <div className={styles.iconzHealthAI}>H</div>,
    },
];


const GetCertificate = () => {
    return (
        <section>
            <div className={`${styles.container} container`}>
                <div className='row'>
                    <div className= "col-md-12">
                        <header className={styles.header}>
                            <div>
                                <h2>aiCertifications</h2>
                                <p>Build your skills in our aiCertifications, co-hosted by world-class research organizations & companies.</p>                                
                            </div>
                            <a href="/aiCertifications" className={styles.viewAll}>
                                View all <FaArrowRight />
                            </a>
                        </header>
                        <div className={styles.competitionsGrid}>
                            {aiCertifications.map((comp, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={styles.icon}>
                                        <div>
                                           <h3 className={styles.title}>{comp.title}</h3> 
                                        </div>
                                        <div>
                                            {comp.icon}                                            
                                        </div>
                                    </div>
                                    <p className={styles.prize}>{comp.duration} · {comp.type}</p>
                                    <p className={styles.description}>{comp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetCertificate;
