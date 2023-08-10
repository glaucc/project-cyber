'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Beginner.module.css';
import Navbar from '@/components/Navbar';

const Beginner = () => {
  const [completedCourses, setCompletedCourses] = useState([]);
  const [showLinuxFundamentals1Buttons, setShowLinuxFundamentals1Buttons] = useState(false);
  const [showLinuxFundamentals2Buttons, setShowLinuxFundamentals2Buttons] = useState(false);
  const [showLinuxFundamentals3Buttons, setShowLinuxFundamentals3Buttons] = useState(false);


  const handleCourseCompletion = (course) => {
    if (!completedCourses.includes(course)) {
      setCompletedCourses([...completedCourses, course]);
    }
  };

  const handleLinuxFundamentals1Click = (e) => {
    e.preventDefault();
    setShowLinuxFundamentals1Buttons(!showLinuxFundamentals1Buttons);
  };

  const handleLinuxFundamentals2Click = (e) => {
    e.preventDefault();
    setShowLinuxFundamentals2Buttons(!showLinuxFundamentals2Buttons);
  };
  
  const handleLinuxFundamentals3Click = (e) => {
    e.preventDefault();
    setShowLinuxFundamentals3Buttons(!showLinuxFundamentals3Buttons);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.beginnerHeader}>Linux Fundamentals</h1>
        <div className={styles.links}>
          <div className={styles.linkWrapper}>
            <a
              className={`${styles.link} ${
                completedCourses.includes('Linux Fundamentals') && styles.finishedLink
              }`}
              onClick={handleLinuxFundamentals1Click}
            >
              Part 1
            </a>
            {showLinuxFundamentals1Buttons && (
              <div className={styles.startingOutButtons}>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part1">
                  <a className={styles.startingOutButton}>Introduction</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part2">
                  <a className={styles.startingOutButton}>A bit of Background on Linux</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Interacting With Your First Linux Machine (In-Browser)</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Running Your First Few Commands</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Interacting With the Filesystem</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Searching for Files</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>An Introduction to Shell Operators</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Conclusions & Summaries</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Linux Fundamentals Part 2</a>
                </Link>
              </div>
            )}
          </div>

          <div className={styles.linkWrapper}>
            <a
              className={`${styles.link} ${
                completedCourses.includes('Linux Fundamentals') && styles.finishedLink
              }`}
              onClick={handleLinuxFundamentals2Click}
            >
              Part 2
            </a>
            {showLinuxFundamentals2Buttons && (
              <div className={styles.startingOutButtons}>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part1">
                  <a className={styles.startingOutButton}>Introduction</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part2">
                  <a className={styles.startingOutButton}>Accessing Your Linux Machine Using SSH (Deploy)</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Introduction to Flags and Switches</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Filesystem Interaction Continued</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Permissions 101</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Common Directories</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Conclusions & Summaries</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Linux Fundamentals Part 3</a>
                </Link>
              </div>
            )}
          </div>
          <div className={styles.linkWrapper}>
            <a
              className={`${styles.link} ${
                completedCourses.includes('Linux Fundamentals') && styles.finishedLink
              }`}
              onClick={handleLinuxFundamentals3Click}
            >
              Part 3
            </a>
            {showLinuxFundamentals3Buttons && (
              <div className={styles.startingOutButtons}>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part1">
                  <a className={styles.startingOutButton}>Introduction</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part2">
                  <a className={styles.startingOutButton}>Deploy Your Linux Machine</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Terminal Text Editors</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>General/Useful Utilities</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Processes 101</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Maintaining Your System: Automation</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Maintaining Your System: Package Management</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Maintaining Your System: Logs</a>
                </Link>
                <Link href="/learn/content/material/beginner/linux-fundamentals/part3">
                  <a className={styles.startingOutButton}>Conclusions & Summaries</a>
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
