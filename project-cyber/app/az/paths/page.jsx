import Image from 'next/image'
import Link from "next/link";


import styles from "../../../styles/Paths.module.scss";
import beginner from '../../../public/static/path-images/egyptian-using-computer.PNG'
import presecurity from '../../../public/static/path-images/computer.PNG'
import pentester from '../../../public/static/path-images/pentester.PNG'
import pentesting from '../../../public/static/path-images/boxing.PNG'
import redteaming from '../../../public/static/path-images/red-superman.PNG'
import soc from '../../../public/static/path-images/soc.PNG'
import cyberdefense from '../../../public/static/path-images/robot-playing-chess.PNG'
import web from '../../../public/static/path-images/web.PNG'
import bugbounty from '../../../public/static/path-images/bugbounty.PNG'
import forensics from '../../../public/static/path-images/for.PNG'


const Paths = () => {
  const paths = [
    {
      title: "Beginner",
      image: beginner,
      link: '/learn/content/beginner',
      description:
        "This path is for individuals who are new to the field of cybersecurity and want to explore the basics of various domains.",
    },
    {
      title: "Web Fundamentals",
      image: web,
      link: '/learn/content/web',
      description:
        "Web Fundamentals path is for those interested in web application security and secure web development.",
    },
    
    {
      title: "Junior Pentester",
      image: pentester,
      link: '/learn/content/jnrpentester',
      description:
        "Junior Pentester path is for aspiring penetration testers who want to learn ethical hacking and security assessment techniques.",
    },
    {
      title: "Pre Security",
      image: presecurity,
      link: '/learn/content/presecurity',
      description:
        "Pre Security path is designed for those who want to learn about securing systems and networks.",
    },
    {
      title: "Offensive Pentesting",
      image: pentesting,
      link: '/learn/content/offensivepentesting',
      description:
        "This path focuses on advanced offensive security techniques and penetration testing methodologies.",
    },
    {
      title: "Red Teaming",
      image: redteaming,
      link: '/learn/content/redteaming',
      description:
        "Red Teaming path is for cybersecurity professionals who want to simulate real-world cyber attacks and improve defenses.",
    },
    {
      title: "SOC Level 1",
      image: soc,
      link: '/learn/content/soc1',
      description:
        "SOC Level 1 path is designed for individuals who want to start a career in Security Operations Centers (SOCs).",
    },
    {
      title: "Cyber Defense",
      image: cyberdefense,
      link: '/learn/content/cyberdefense',
      description:
        "Cyber Defense path focuses on building strong defenses and incident response skills to protect against cyber threats.",
    },
    
    {
      title: "Bug Bounty",
      image: bugbounty,
      link: '/learn/content/bugbounty',
      description:
        "Bug Bounty path is for cybersecurity enthusiasts who want to discover and report vulnerabilities in systems for rewards.",
    },
    {
      title: "Digital Forensics",
      image: forensics,
      link: '/learn/content/digitalforensics',
      description:
        "Digital Forensics path is for professionals who want to investigate and analyze digital evidence for legal and investigative purposes.",
    },
  ];

  return (
  
  <>
    
    <div className={styles["paths-container"]}>
      <h1 className={styles["paths-title"]}>Career Paths in Cyber Security</h1>
      <div className={styles["paths-grid"]}>
        {paths.map((path, index) => (
          <Link href={path.link}  key={index}>
            <div key={index} className={styles["path-card"]}>
              <div className={styles["path-image-container"]}>
                <Image
                  src={path.image}
                  alt={path.title}
                  width={200} // Adjust the width and height as per your design requirements
                  height={200}
                  />
              </div>
              <h2 className={styles["path-title"]}>{path.title}</h2>
              <p className={styles["path-description"]}>{path.description}</p>
            </div>
          </Link>
        ))}
      </div>
    
    </div>
  </>
  );
};

export default Paths;
