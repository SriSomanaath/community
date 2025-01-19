"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Page = () => {
  const [stage, setStage] = useState(1);

  const nextStage = () => {
    if (stage < 3) {
      setStage(stage + 1);
    }
  };

  const previousStage = () => {
    if (stage > 1) {
      setStage(stage - 1);
    }
  };

  const handleSubmit = () => {
    window.location.href = "/recruit";
  };

  return (
    <section className={styles.container}>
      <aside className={styles.sidebar}>
        <div>
          <Image src={'/Logo_1.png'} alt="opencv dashboard" height={100} width={100} />
        </div>
        <ul>
          <li className={stage === 1 ? styles.active : ""}>Set up your account</li>
          <li className={stage === 2 ? styles.active : ""}>Invite your team</li>
          <li className={stage === 3 ? styles.active : ""}>Start recruiting</li>
        </ul>
      </aside>
      <div className={styles.formContainer}>
        {stage === 1 && (
          <div className={styles.form}>
            <h2>Lets create your Account</h2>
            <p className={styles.infoText}>
              Please provide details about your company. You can update these later.
            </p>
            <form>
              <h3>About your Company</h3>
              <label className={styles.label} htmlFor="companyName">
                Company Name*
              </label>
              <input
                className={styles.input}
                type="text"
                id="companyName"
                placeholder="Your Company Name"
              />

              <label className={styles.label} htmlFor="logo">
                Logo*
              </label>
              <div className={styles.fileUpload}>
                <button type="button" className={styles.uploadButton}>
                  Upload Logo
                </button>
                <span>or drag it in</span>
              </div>

              <label className={styles.label} htmlFor="workEmail">
                Work Email*
              </label>
              <input
                className={styles.input}
                type="email"
                id="workEmail"
                placeholder="you@company.com"
              />

              <label className={styles.label} htmlFor="website">
                Website
              </label>
              <input
                className={styles.input}
                type="url"
                id="website"
                placeholder="https://www.yourcompany.com"
              />

              <label className={styles.label} htmlFor="location">
                Location
              </label>
              <input
                className={styles.input}
                type="text"
                id="location"
                placeholder="City, Country"
              />

              <label className={styles.label} htmlFor="markets">
                Markets*
              </label>
              <input
                className={styles.input}
                type="text"
                id="markets"
                placeholder="e.g., Mobile, Blockchain"
              />

              <label className={styles.label} htmlFor="numEmployees">
                Number of Employees*
              </label>
              <select className={styles.select} id="numEmployees">
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>

              <label className={styles.label} htmlFor="pitch">
                One-line Pitch*
              </label>
              <input
                className={styles.input}
                type="text"
                id="pitch"
                placeholder="Describe what your company does in just a few words"
                maxLength={100}
              />

              <h3>About You</h3>
              <label className={styles.label} htmlFor="photo">
                Photo
              </label>
              <div className={styles.fileUpload}>
                <button type="button" className={styles.uploadButton}>
                  Upload a new photo
                </button>
              </div>

              <label className={styles.label} htmlFor="yourName">
                Name*
              </label>
              <input
                className={styles.input}
                type="text"
                id="yourName"
                placeholder="Your Full Name"
              />

              <label className={styles.label} htmlFor="phone">
                Phone (US only)*
              </label>
              <input
                className={styles.input}
                type="tel"
                id="phone"
                placeholder="(000) 000-0000"
              />

              <label className={styles.label} htmlFor="role">
                Your Role*
              </label>
              <select className={styles.select} id="role">
                <option value="founder">Founder</option>
                <option value="recruiter">Recruiter</option>
                <option value="hiringManager">Hiring Manager</option>
                <option value="other">Other</option>
              </select>

              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                I have read and accepted the <a href="#">Guidelines and Terms of Service</a>
              </label>

              <div className={styles.buttonGroup}>
                <button type="button" onClick={previousStage} className={styles.backButton}>
                  Back
                </button>
                <button type="button" onClick={nextStage} className={styles.nextButton}>
                  Next up: Invite your team
                </button>
              </div>
            </form>
          </div>
        )}
        {stage === 2 && (
          <div className={styles.form}>
            <h2>Hiring Information</h2>
            <p className={styles.infoText}>
              Share details about the roles you are hiring for and your companys funding status.
            </p>
            <form>
              <label className={styles.label} htmlFor="roles">
                Roles You Are Hiring For
              </label>
              <div className={styles.checkboxGroup}>
                <input type="checkbox" id="software" name="roles" />
                <label htmlFor="software">Software Engineers</label>
                <input type="checkbox" id="product" name="roles" />
                <label htmlFor="product">Product Managers</label>
                <input type="checkbox" id="design" name="roles" />
                <label htmlFor="design">Designers</label>
                <input type="checkbox" id="sales" name="roles" />
                <label htmlFor="sales">Sales</label>
                <input type="checkbox" id="other" name="roles" />
                <label htmlFor="other">Other</label>
              </div>
              <label className={styles.label} htmlFor="funding">
                Funding Raised
              </label>
              <select className={styles.select} id="funding">
                <option value="0-1">$0-1M</option>
                <option value="1-10">$1-10M</option>
                <option value="11-50">$11-50M</option>
                <option value="51+">$51M+</option>
              </select>
              <button
                type="button"
                onClick={previousStage}
                className={styles.backButton}
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStage}
                className={styles.nextButton}
              >
                Next
              </button>
            </form>
          </div>
        )}
        {stage === 3 && (
          <div className={styles.form}>
            <h2>Finalize and Submit</h2>
            <p className={styles.infoText}>
              Review your details and submit the form to start your recruitment journey.
            </p>
            <form>
              <label className={styles.label} htmlFor="additionalNotes">
                Additional Notes
              </label>
              <textarea
                className={styles.textarea}
                id="additionalNotes"
                placeholder="Any additional details about your hiring needs..."
              ></textarea>
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  onClick={previousStage}
                  className={styles.backButton}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={styles.submitButton}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
