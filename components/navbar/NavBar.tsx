"use client";

import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Image from 'next/image';
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/" legacyBehavior>
            <Image src={'/Logo_2.png'} height={180} width={180} alt='logo'/>
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/jobs" legacyBehavior>
                <a>Job-seekers</a>
              </Link>
            </li>
            <li>
              <Link href="/hire-talent" legacyBehavior>
                <a>Hire-Talent</a>
              </Link>
            </li>
            <li>
              <Link href="/get-certified" legacyBehavior>
                <a>Get Certified</a>
              </Link>
            </li>
            <li>
              <Link href="/mock-interview" legacyBehavior>
                <a>Mock Interview</a>
              </Link>
            </li>
          </ul>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search..." 
              className={styles.searchInput} 
            />
          </div>
          <div className={styles.authButtons}>
            <button className={styles.loginButton}>
              <a href="/login">Register</a>
            </button>
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

export default NavBar;
