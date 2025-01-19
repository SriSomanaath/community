"use client";

import React, { useState, useEffect } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import styles from "./DashboardNavBar.module.css";
import Link from "next/link"; // Import Link from next/link
import Image from "next/image"; // Import Image from next/image

const DashboardNavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(`.${styles.profileButton}`)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navBar}>
      <div className={styles.leftSection}>
        <Link href="/" className={styles.logoLink}> {/* Use Link instead of a */}
          <Image 
            src="/Logo_1.png" 
            alt="Logo" 
            className={styles.logo} 
            width={100} // Set appropriate width
            height={40} // Set appropriate height
          />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/recruit" className={styles.navItem}>Home</Link> {/* Use Link instead of a */}
          <Link href="/recruit/applicants-status" className={styles.navItem}>Applicants Status</Link> {/* Use Link instead of a */}
          <Link href="/recruit/post-job" className={styles.navItem}>Post Job</Link> {/* Use Link instead of a */}
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
        <div className={styles.profileButton} onClick={(e) => {
          e.stopPropagation();
          setProfileMenuOpen(!profileMenuOpen);
        }}>
          <FaUser className={styles.profileIcon} />
          {profileMenuOpen && (
            <div className={styles.profileMenu}>
              <Link href="/recruit/profile" className={styles.profileMenuItem}>Profile</Link> {/* Use Link instead of a */}
              <Link href="/logout" className={styles.profileMenuItem}>Logout</Link> {/* Use Link instead of a */}
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
          <button className={styles.discoverButton}>Discover</button>
          <Link href="/applicants-status" className={styles.mobileMenuItem}>Applicants Status</Link> {/* Use Link instead of a */}
          <Link href="/post-job" className={styles.mobileMenuItem}>Post Job</Link> {/* Use Link instead of a */}
        </div>
      )}
    </nav>
  );
};

export default DashboardNavBar;
