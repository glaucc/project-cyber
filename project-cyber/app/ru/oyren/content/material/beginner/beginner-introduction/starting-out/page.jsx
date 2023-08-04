import Link from 'next/link';
import styles from './Beginner.module.css';

const Beginner = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.beginnerHeader}>Starting Out</h1>
      <div className={styles.links}>
        {/* Clickable elements */}
        <Link href="/learn/content/material/beginner/beginner-introduction/starting-out/offensive-security">
          <a className={styles.link}>Offensive Security</a>
        </Link>
        <Link href="/learn/content/material/beginner/beginner-introduction/starting-out/defensive-security">
          <a className={styles.link}>Defensive Security</a>
        </Link>
        
      </div>
    </div>
  );
};

export default Beginner;


