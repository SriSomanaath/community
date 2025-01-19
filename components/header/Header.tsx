import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image className={styles.logo_img} src={'/Logo_2.png'} height={150} width={150} alt='logo'/>
        </Link>
      </div>
      <div className={styles.searchBars}>
        <input
          type="text"
          placeholder="Search by location"
          className={styles.searchInput}
        />
        <input
          type="text"
          placeholder="Search by title"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.authButtons}>
        <button className={`${styles.button} ${styles.signIn}`}>Sign In</button>
        <button className={`${styles.button} ${styles.register}`}>
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
