import Link from 'next/link';
import styles from './Beginner.module.css';

const Beginner = () => {
  return (
    <div className={styles.container}>
      <h1>Beginner Path</h1>
      <div className={styles.links}>
        {/* Clickable elements */}
        <Link href="/paths/content/beginner/pre-security">
          <a className={styles.link}>Pre Security</a>
        </Link>
        <Link href="/paths/content/beginner/junior-pentester">
          <a className={styles.link}>Junior Pentester</a>
        </Link>
        <Link href="/paths/content/beginner/offensive-pentesting">
          <a className={styles.link}>Offensive Pentesting</a>
        </Link>
        <Link href="/paths/content/beginner/red-teaming">
          <a className={styles.link}>Red Teaming</a>
        </Link>
        <Link href="/paths/content/beginner/soc-level-1">
          <a className={styles.link}>SOC Level 1</a>
        </Link>
        <Link href="/paths/content/beginner/cyber-defense">
          <a className={styles.link}>Cyber Defense</a>
        </Link>
        <Link href="/paths/content/beginner/web-fundamentals">
          <a className={styles.link}>Web Fundamentals</a>
        </Link>
        <Link href="/paths/content/beginner/bug-bounty">
          <a className={styles.link}>Bug Bounty</a>
        </Link>
      </div>
    </div>
  );
};

export default Beginner;
