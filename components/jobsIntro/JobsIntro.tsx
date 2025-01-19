import React from 'react';
import styles from './JobsIntro.module.css';
import { FaArrowRight } from 'react-icons/fa';

const aiCvJobs = [
    {
        title: "Computer Vision Engineer",
        salary: "$120,000 - $150,000/year",
        type: "Full-Time",
        description: "Design and implement computer vision algorithms for image processing, object detection, and recognition.",
        icon: <FaArrowRight />,
    },
    {
        title: "Machine Learning Engineer",
        salary: "$110,000 - $140,000/year",
        type: "Full-Time",
        description: "Build and deploy machine learning pipelines for predictive analytics and recommendation systems.",
        icon: <div className={styles.iconML}>ML</div>,
    },
    {
        title: "Computer Vision Intern",
        salary: "$20 - $30/hour",
        type: "Internship",
        description: "Assist in developing and testing computer vision applications for real-time image and video analysis.",
        icon: <div className={styles.iconCV}>CV</div>,
    },
    {
        title: "AI Product Manager",
        salary: "$100,000 - $140,000/year",
        type: "Full-Time",
        description: "Lead cross-functional teams to deliver AI-powered products that solve complex user problems.",
        icon: <div className={styles.iconPM}>PM</div>,
    }
];


const JobsIntro = () => {
    return (
        <section>
            <div className={`${styles.container} container`}>
                <div className='row'>
                    <div className= "col-md-12">
                        <header className={styles.header}>
                            <div>
                                <h2>aiCvJobs</h2>
                                <p>Build your skills in our aiCvJobs, co-hosted by world-class research organizations & companies.</p>                                
                            </div>
                            <a href="/aiCvJobs" className={styles.viewAll}>
                                View all <FaArrowRight />
                            </a>
                        </header>
                        <div className={styles.competitionsGrid}>
                            {aiCvJobs.map((comp, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={styles.icon}>
                                        <div>
                                           <h3 className={styles.title}>{comp.title}</h3> 
                                        </div>
                                        <div>
                                            {comp.icon}                                            
                                        </div>
                                    </div>
                                    <p className={styles.prize}>{comp.salary} · {comp.type}</p>
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

export default JobsIntro;
