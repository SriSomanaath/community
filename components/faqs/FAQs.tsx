"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./FAQs.module.css";

export const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "How can I post a job?",
            answer: "To post a job, simply navigate to your dashboard, click \"Post Job,\" and fill out the job details. Once submitted, your job will be live for candidates to apply. To post a job, simply navigate to your dashboard, click \"Post Job,\" and fill out the job details. Once submitted, your job will be live for candidates to apply. To post a job, simply navigate to your dashboard, click \"Post Job,\" and fill out the job details. Once submitted, your job will be live for candidates to apply.",
        },
        {
            question: "How can I track applicants?",
            answer: "You can track applicants directly from your dashboard. Each application will display the candidate's status, allowing you to engage with them accordingly. You can track applicants directly from your dashboard. Each application will display the candidate's status, allowing you to engage with them accordingly. You can track applicants directly from your dashboard. Each application will display the candidate's status, allowing you to engage with them accordingly.",
        },
        {
            question: "How can I edit my job posting?",
            answer: "Editing a job posting is easy. Go to your dashboard, click on the job you want to edit, make changes, and save the updated job posting. Editing a job posting is easy. Go to your dashboard, click on the job you want to edit, make changes, and save the updated job posting. Editing a job posting is easy. Go to your dashboard, click on the job you want to edit, make changes, and save the updated job posting.",
        },
        {
            question: "What should I do if I forget my password?",
            answer: "If you forget your password, navigate to the login page and click on the 'Forgot Password' link. Enter your registered email address, and you will receive an email with instructions to reset your password. Make sure to check your spam or junk folder if you don’t see the email in your inbox. If you are still unable to reset your password, please contact customer support for assistance. Our support team is available 24/7 to help you regain access to your account. Additionally, you may want to update your security settings once you have successfully reset your password."
        },
        {
            question: "How can I delete my account?",
            answer: "Deleting your account is a permanent action, so please proceed with caution. To delete your account, log in and go to the 'Settings' page. Scroll down to the 'Account Management' section and click 'Delete Account.' You will be asked to confirm this action and provide feedback on why you are leaving. Once you confirm, your account and all associated data will be permanently removed from our system. Please note that this action cannot be undone. If you change your mind, ensure you do not confirm the deletion process. For further assistance, feel free to contact our support team."
        },
        {
            question: "How do I update my profile information?",
            answer: "Updating your profile information is simple and can be done at any time. Log in to your account and navigate to the 'Profile' section from the dashboard. Here, you can update your personal information, including your name, email address, phone number, and profile picture. Make sure to click the 'Save Changes' button to ensure your updates are applied. If you encounter any errors or issues while updating your profile, you can reach out to customer support for assistance. It’s recommended to keep your profile information accurate and up to date to ensure smooth communication and access to relevant features."
        }
    ];
    

    return (
        <section className={styles.faqSection}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                    {questions.map((item, index) => (
                        <div key={index} className={styles.faqItem}>
                            <div
                                className={styles.faqQuestion}
                                onClick={() => toggleAnswer(index)}
                            >
                                <h5>{item.question}</h5>
                                <span className={styles.icon}>
                                    {activeIndex === index ? (
                                        <FiChevronUp size={20} />
                                    ) : (
                                        <FiChevronDown size={20} />
                                    )}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer}>
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
