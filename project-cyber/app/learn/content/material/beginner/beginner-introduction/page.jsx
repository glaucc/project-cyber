'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Beginner.module.css';
import Navbar from '@/components/Navbar';

const Beginner = () => {
  const [completedCourses, setCompletedCourses] = useState([]);
  const [showStartingOutButtons, setShowStartingOutButtons] = useState(false);
  const [showIntroductoryButtons, setShowIntroductoryButtons] = useState(false);

  const handleCourseCompletion = (course) => {
    if (!completedCourses.includes(course)) {
      setCompletedCourses([...completedCourses, course]);
    }
  };

  const handleStartingOutClick = (e) => {
    e.preventDefault();
    setShowStartingOutButtons(!showStartingOutButtons);
  };

  const handleIntroductoryClick = (e) => {
    e.preventDefault();
    setShowIntroductoryButtons(!showIntroductoryButtons);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.beginnerHeader}>Beginner Introduction</h1>
        <div className={styles.links}>
          <div className={styles.linkWrapper}>
            <a
              className={`${styles.link} ${
                completedCourses.includes('Starting Out') && styles.finishedLink
              }`}
              onClick={handleStartingOutClick}
            >
              Starting Out
            </a>
            {showStartingOutButtons && (
              <div className={styles.startingOutButtons}>
                <Link href="/learn/content/material/beginner/beginner-introduction/starting-out/offensive-security">
                  <a className={styles.startingOutButton}>Offensive Security</a>
                </Link>
                <Link href="/learn/content/material/beginner/beginner-introduction/starting-out/defensive-security">
                  <a className={styles.startingOutButton}>Defensive Security</a>
                </Link>
              </div>
            )}
          </div>
          <div className={styles.linkWrapper}>
            <a
              className={`${styles.link} ${
                completedCourses.includes('Introductory Researching') && styles.finishedLink
              }`}
              onClick={handleIntroductoryClick}
            >
              Introductory Researching
            </a>
            {showIntroductoryButtons && (
              <div className={styles.startingOutButtons}>
                <Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/introduction">
                  <a className={styles.startingOutButton}>Introduction</a>
                </Link>
                <Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/example-research-question">
                  <a className={styles.startingOutButton}>Example Research Question</a>
                </Link>
                <Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/vulnerability-searching">
                  <a className={styles.startingOutButton}>Vulnerability Searching</a>
                </Link>
                <Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/manual-pages">
                  <a className={styles.startingOutButton}>Manual Pages</a>
                </Link>
                <Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/final-thoughts">
                  <a className={styles.startingOutButton}>Final Thoughts</a>
                </Link>
              </div>
            )}
          </div>
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
