"use client";

import React, { useState } from 'react';
import styles from './FAQsForCertified.module.css';

export const FAQsForCertified = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the duration of the courses?",
            answer: "Each course is designed to be flexible, allowing you to complete it at your own pace. On average, courses take 4-6 weeks to complete.",
        },
        {
            question: "Do I get a certificate after completing the course?",
            answer: "Yes! Upon successfully completing the course and passing the assessments, you will receive a verifiable certificate.",
        },
        {
            question: "Are there any prerequisites for enrolling?",
            answer: "No specific prerequisites are required. Our courses cater to all levels, from beginners to advanced learners.",
        },
        {
            question: "Can I access the course materials after completion?",
            answer: "Absolutely. Once enrolled, you will have lifetime access to the course materials and any updates.",
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept all major credit cards, debit cards, and PayPal. Secure checkout ensures your transaction safety.",
        },
    ];

    return (
        <section className={styles.faqSection}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                    {faqData.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <div
                                className={styles.faqQuestion}
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3>{faq.question}</h3>
                            </div>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQsForCertified;
