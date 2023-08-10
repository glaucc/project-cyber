'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Beginner.module.css';
import Navbar from '@/components/Navbar';

const Beginner = () => {
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleCourseCompletion = (course) => {
    if (!completedCourses.includes(course)) {
      setCompletedCourses([...completedCourses, course]);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.beginnerHeader}>Beginner Path</h1>
        <div className={styles.links}>
          <Link href="/learn/content/material/beginner/beginner-introduction">
            <a className={`${styles.link} ${completedCourses.includes('Beginner Introduction') && styles.finishedLink}`}>Beginner Introduction</a>
          </Link>
          <Link href="/learn/content/material/beginner/linux-fundamentals">
            <a className={`${styles.link} ${completedCourses.includes('Linux Fundamentals') && styles.finishedLink}`}>Linux Fundamentals</a>
          </Link>
          <Link href="/paths/content/beginner/offensive-pentesting">
            <a className={`${styles.link} ${completedCourses.includes('Network Exploitation Basics') && styles.finishedLink}`}>Network Exploitation Basics</a>
          </Link>
          <Link href="/paths/content/beginner/red-teaming">
            <a className={`${styles.link} ${completedCourses.includes('Web Hacking Fundamentals') && styles.finishedLink}`}>Web Hacking Fundamentals</a>
          </Link>
          <Link href="/paths/content/beginner/soc-level-1">
            <a className={`${styles.link} ${completedCourses.includes('Cryptography') && styles.finishedLink}`}>Cryptography</a>
          </Link>
          <Link href="/paths/content/beginner/cyber-defense">
            <a className={`${styles.link} ${completedCourses.includes('Windows Exploitation Basics') && styles.finishedLink}`}>Windows Exploitation Basics</a>
          </Link>
          <Link href="/paths/content/beginner/web-fundamentals">
            <a className={`${styles.link} ${completedCourses.includes('Shell and Privilege Escalation') && styles.finishedLink}`}>Shell and Privilege Escalation</a>
          </Link>
          <Link href="/paths/content/beginner/bug-bounty">
            <a className={`${styles.link} ${completedCourses.includes('Basic Computer Exploitation') && styles.finishedLink}`}>Basic Computer Exploitation</a>
          </Link>
        </div>
        <div className={styles.progressBars}>
          {completedCourses.map((course) => (
            <div key={course} className={styles.progressBar}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Beginner;
