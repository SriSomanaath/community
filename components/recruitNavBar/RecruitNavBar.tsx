"use client";

import React, { useState } from 'react';
import styles from './RecruitNavBar.module.css';
import Image from 'next/image';

const RecruitNavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
            <Image src={'/Logo_2.png'} height={150} width={150} alt='logo'/>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li><a href="/jobs">Job-seekers</a></li>
            <li><a href="/hire-talent">Hire-Talent</a></li>
            <li><a href="/get-certified">Get Certified</a></li>
            <button className={styles.signInButton}>
            </button>
          </ul>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search..." 
              className={styles.searchInput} 
            />
          </div>
          <div className={styles.authButtons}>
            <button className={styles.signInButton}>Sign In</button>
            <button className={styles.loginButton}>Register</button>
          </div>
        </nav>
        <div 
          className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </header>
  );
};

export default RecruitNavBar;