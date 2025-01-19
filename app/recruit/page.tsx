"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { RiRefreshLine } from "react-icons/ri";

const Page = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={'/Logo_2.png'} height={150} width={150} alt="company logo" />
        </div>
        <div className={styles.greeting}>Hello, Srinath!</div>
        <div className={styles.refreshMetric}>
          <div
            className={`${styles.radioButton} ${
              isChecked ? styles.checked : ''
            }`}
            onClick={() => setIsChecked(!isChecked)}
          ></div>
          <span className={styles.refresh}><RiRefreshLine /> refresh metrics</span>
        </div>
      </div>

      <div className={styles.metrics}>
        <div className={styles.metricBox}>
          <div className={styles.boxHeader}>
            <h6>Applicants</h6>
            <span>14 days</span>
          </div>
          <div className={styles.metricGroup}>
            {["Applicants", "Matches", "Messages"].map((metric) => (
              <div key={metric} className={styles.metricItem}>
                <h2>0</h2>
                <p>{metric}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.metricBox}>
          <div className={styles.boxHeader}>
            <h6>Sourcing</h6>
            <span>14 days</span>
          </div>
          <div className={styles.metricGroup}>
            {["Views", "Pitches", "Matches"].map((metric) => (
              <div key={metric} className={styles.metricItem}>
                <h2>0</h2>
                <p>{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.referral}>
        <p>
          Know someone hiring? Refer and earn $1300.
          <span>Refer someone hiring in your network—you’ll get cash and they’ll get a $500 discount.</span>
        </p>
        <button className={styles.referralButton}>Refer and earn →</button>
      </div>

      <div className={styles.features}>
        <div className={styles.featureBox}>
          <h5>Find top-quality talent for your startup</h5>
          <p>Unique filters help cut through the noise by looking for the signals that truly matter to your team.</p>
          <button className={styles.featureButton}>Source talent</button>
        </div>
        <div className={styles.featureBox}>
          <h5>Fast-track your workflow with pitch templates</h5>
          <p>Set up, save and reuse your pitch templates to reduce work and increase candidate outreach.</p>
          <button className={styles.featureButton}>Create templates</button>
        </div>
        <div className={styles.featureBox}>
          <h5>Collaborate with your team more efficiently</h5>
          <p>Bookmark candidates, leave notes, and share with your team to speed up your hiring process.</p>
          <button className={styles.featureButton}>Invite team members</button>
        </div>
      </div>

      <div className={styles.activityFeed}>
        <h3>Activity Feed</h3>
        <p>No recent activity. Get started by posting a job or searching for your ideal candidate.</p>
        <div className={styles.ctaButtons}>
          <button className={styles.ctaButton}>Post a job</button>
          <button className={styles.ctaButton}>Source talent</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
