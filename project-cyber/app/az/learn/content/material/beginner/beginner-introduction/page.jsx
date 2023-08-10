'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Beginner.module.css';
import NavbarAz from '@/components/NavbarAz';

const Beginner = () => {
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleCourseCompletion = (course) => {
    if (!completedCourses.includes(course)) {
      setCompletedCourses([...completedCourses, course]);
    }
  };

  return (
    <>
      <NavbarAz />
      <div className={styles.container}>
        <h1 className={styles.beginnerHeader}>Beginner Introduction</h1>
        <div className={styles.links}>
          <Link href="/learn/content/material/beginner/beginner-introduction/starting-out">
            <a className={`${styles.link} ${completedCourses.includes('Beginner Introduction') && styles.finishedLink}`}>Beginner Introduction</a>
          </Link>
          <Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching">
            <a className={`${styles.link} ${completedCourses.includes('Linux Fundamentals') && styles.finishedLink}`}>Linux Fundamentals</a>
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



