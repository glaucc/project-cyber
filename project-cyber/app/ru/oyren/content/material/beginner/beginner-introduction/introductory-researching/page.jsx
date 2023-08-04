import Link from 'next/link';
import styles from './Beginner.module.css';

const Beginner = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.beginnerHeader}>Introductory Research</h1>
      <div className={styles.links}>
        {/* Clickable elements */}
        <Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/introduction">
          <a className={styles.link}>Introduction</a>
        </Link>
        <Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/example-research-question">
          <a className={styles.link}>Example Research Question</a>
        </Link>
        <Link href="/learn/content/material/beginner/beginner-introduction/starting-out/introductory-researching/vulnerability-searching">
          <a className={styles.link}>Vulnerability Searching</a>
        </Link>
        <Link href="/learn/content/material/beginner/beginner-introduction/starting-out/introductory-researching/manual-pages">
          <a className={styles.link}>Manual Pages</a>
        </Link>
        <Link href="/learn/content/material/beginner/beginner-introduction/starting-out/introductory-researching/final-thoughts">
          <a className={styles.link}>Final Thoughts</a>
        </Link>
        
      </div>
    </div>
  );
};

export default Beginner;


