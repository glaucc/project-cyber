import React from "react";
import Image from 'next/image'

import styles from "../../styles/Paths.module.scss";
import beginner from '../../public/path-images/egyptian-using-computer.PNG'
import presecurity from '../../public/path-images/computer.PNG'
import pentester from '../../public/path-images/pentester.PNG'
import pentesting from '../../public/path-images/boxing.PNG'
import redteaming from '../../public/path-images/red-superman.PNG'
import soc from '../../public/path-images/soc.PNG'
import cyberdefense from '../../public/path-images/robot-playing-chess.PNG'
import web from '../../public/path-images/web.PNG'
import bugbounty from '../../public/path-images/bugbounty.PNG'
import forensics from '../../public/path-images/for.PNG'


const Paths = () => {
  const paths = [
    {
      title: "Beginner",
      image: beginner,
      description:
        "This path is for individuals who are new to the field of cybersecurity and want to explore the basics of various domains.",
    },
    {
      title: "Pre Security",
      image: presecurity,
      description:
        "Pre Security path is designed for those who want to learn about securing systems and networks.",
    },
    {
      title: "Junior Pentester",
      image: pentester,
      description:
        "Junior Pentester path is for aspiring penetration testers who want to learn ethical hacking and security assessment techniques.",
    },
    {
      title: "Offensive Pentesting",
      image: pentesting,
      description:
        "This path focuses on advanced offensive security techniques and penetration testing methodologies.",
    },
    {
      title: "Red Teaming",
      image: redteaming,
      description:
        "Red Teaming path is for cybersecurity professionals who want to simulate real-world cyber attacks and improve defenses.",
    },
    {
      title: "SOC Level 1",
      image: soc,
      description:
        "SOC Level 1 path is designed for individuals who want to start a career in Security Operations Centers (SOCs).",
    },
    {
      title: "Cyber Defense",
      image: cyberdefense,
      description:
        "Cyber Defense path focuses on building strong defenses and incident response skills to protect against cyber threats.",
    },
    {
      title: "Web Fundamentals",
      image: web,
      description:
        "Web Fundamentals path is for those interested in web application security and secure web development.",
    },
    {
      title: "Bug Bounty",
      image: bugbounty,
      description:
        "Bug Bounty path is for cybersecurity enthusiasts who want to discover and report vulnerabilities in systems for rewards.",
    },
    {
      title: "Digital Forensics",
      image: forensics,
      description:
        "Digital Forensics path is for professionals who want to investigate and analyze digital evidence for legal and investigative purposes.",
    },
  ];

  return (
    <div className={styles["paths-container"]}>
      <h1 className={styles["paths-title"]}>Career Paths in Cyber Security</h1>
      <div className={styles["paths-grid"]}>
        {paths.map((path, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Paths;
