import Link from 'next/link';
import styles from './Beginner.module.css';

const Beginner = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.beginnerHeader}>Pre Security Path</h1>
      <div className={styles.links}>
        {/* Clickable elements */}
        <Link href="/paths/content/beginner/pre-security">
          <a className={styles.link}>Beginner Introduction</a>
        </Link>
        <Link href="/paths/content/beginner/junior-pentester">
          <a className={styles.link}>Linux Fundamentals</a>
        </Link>
        <Link href="/paths/content/beginner/offensive-pentesting">
          <a className={styles.link}>Network Exploitation Basics</a>
        </Link>
        <Link href="/paths/content/beginner/red-teaming">
          <a className={styles.link}>Web Hacking Fundamentals</a>
        </Link>
        <Link href="/paths/content/beginner/soc-level-1">
          <a className={styles.link}>Cryptography</a>
        </Link>
        <Link href="/paths/content/beginner/cyber-defense">
          <a className={styles.link}>Windows Exploitation Basics</a>
        </Link>
        <Link href="/paths/content/beginner/web-fundamentals">
          <a className={styles.link}>Shell and Privilege Escalation</a>
        </Link>
        <Link href="/paths/content/beginner/bug-bounty">
          <a className={styles.link}>Basic Computer Exploitation</a>
        </Link>
      </div>
    </div>
  );
};

export default Beginner;
