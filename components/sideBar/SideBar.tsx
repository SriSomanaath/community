"use client";

import React, { useState } from 'react'; // Removed useEffect
import styles from './SideBar.module.css';
import { FaHome, FaTrophy, FaCode, FaGraduationCap } from 'react-icons/fa'; // Removed unused icons
import { FiPlus } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname(); // Get the current route.

  const menuItems = [
    { icon: <FaHome />, label: 'Home', link: '/' },
    { icon: <FaGraduationCap />, label: 'Jobs', link: '/jobs' },
    { icon: <FaCode />, label: 'Hire Talent', link: '/hire-talent' },
    { icon: <FaTrophy />, label: 'Get Certified', link: '/get-certified' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.createSection}>
          <button className={styles.createButton}>
            <FiPlus size={20} />
            <span>Post Job</span>
          </button>
        </div>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <Link href={item.link} key={index} className={styles.link}>
              <li
                className={`${styles.menuItem} ${
                  pathname === item.link ? styles.active : ''
                }`}
              >
                {item.icon}
                <span className={styles.label}>{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
