"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

const Page: React.FC = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [userRole, setUserRole] = useState("student"); // Default role is 'student'

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleRoleChange = (role: string) => {
    setUserRole(role);
  };

  return (
    <div className={`${styles.container} ${isRightPanelActive ? styles.rightPanelActive : ""}`}>
      {/* Sign Up Form */}
      <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
        <form className={styles.form}>
          <h1>Create Account</h1>
          <div className={styles.socialContainer}>
            <a href="#" className={styles.social}>FB</a>
            <a href="#" className={styles.social}>G+</a>
            <a href="#" className={styles.social}>IN</a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className={styles.roleSelection}>
            <label>
              <input
                type="radio"
                name="role"
                value="student"
                checked={userRole === "student"}
                onChange={() => handleRoleChange("student")}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={userRole === "recruiter"}
                onChange={() => handleRoleChange("recruiter")}
              />
              Recruiter
            </label>
          </div>
          <button className={styles.button} type="button">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form className={styles.form}>
          <h1>Sign in</h1>
          <div className={styles.socialContainer}>
            <a href="#" className={styles.social}>FB</a>
            <a href="#" className={styles.social}>G+</a>
            <a href="#" className={styles.social}>IN</a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className={styles.roleSelection}>
            <label>
              <input
                type="radio"
                name="role"
                value="student"
                checked={userRole === "student"}
                onChange={() => handleRoleChange("student")}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={userRole === "recruiter"}
                onChange={() => handleRoleChange("recruiter")}
              />
              Recruiter
            </label>
          </div>
          <a href="#">Forgot your password?</a>
          <button className={styles.button} type="button">Sign In</button>
        </form>
      </div>

      {/* Overlay */}
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <h1>Welcome Back!</h1>
            <p>To keep connected, please login with your personal info</p>
            <button className={`${styles.ghost} ${styles.button}`} onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className={`${styles.ghost} ${styles.button}`} onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
