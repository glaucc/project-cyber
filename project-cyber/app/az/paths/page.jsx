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
import NavbarAz from '@/components/NavbarAz';


const Paths = () => {
  const paths = [
    {
      title: "Başlanğıc",
      image: beginner,
      link: '/az/learn/content/beginner',
      description:
        "Bu yol kibertəhlükəsizlik sahəsində yeni olan və müxtəlif sahələrin əsaslarını araşdırmaq istəyən şəxslər üçündür.",
    },
    {
      title: "Veb əsasları",
      image: web,
      link: '/az/learn/content/web',
      description:
        "Veb Əsasları yolu veb tətbiqi təhlükəsizliyi və təhlükəsiz veb inkişafı ilə maraqlananlar üçündür.",
    },
    
    {
      title: "Kiçik Pentester",
      image: pentester,
      link: '/az/learn/content/jnrpentester',
      description:
        "Kiçik Pentester yolu etik hakerlik və təhlükəsizliyin qiymətləndirilməsi üsullarını öyrənmək istəyən penetrasiya testçiləri üçündür.",
    },
    {
      title: "Ön Təhlükəsizlik",
      image: presecurity,
      link: '/az/learn/content/presecurity',
      description:
        "Ön Təhlükəsizlik yolu sistemlərin və şəbəkələrin təhlükəsizliyini öyrənmək istəyənlər üçün nəzərdə tutulmuşdur.",
    },
    {
      title: "Hücumedici Pentestinq",
      image: pentesting,
      link: '/az/learn/content/offensivepentesting',
      description:
        "Bu yol qabaqcıl hücum təhlükəsizlik texnikalarına və nüfuzetmə testi metodologiyalarına diqqət yetirir.",
    },
    {
      title: "Qırmızı Komanda",
      image: redteaming,
      link: '/az/learn/content/redteaming',
      description:
        "Qırmızı Komanda yolu real dünyada kiberhücumları simulyasiya etmək və müdafiəni təkmilləşdirmək istəyən kibertəhlükəsizlik peşəkarları üçündür.",
    },
    {
      title: "SOC Səviyyə 1",
      image: soc,
      link: '/az/learn/content/soc1',
      description:
        "Təhlükəsizlik Əməliyyatları Mərkəzlərində (SOC) karyera qurmaq istəyən şəxslər üçün nəzərdə tutulmuşdur.",
    },
    {
      title: "Kiber Müdafiə",
      image: cyberdefense,
      link: '/az/learn/content/cyberdefense',
      description:
        "Kiber Müdafiə yolu kibertəhlükələrdən qorunmaq üçün güclü müdafiə və insidentlərə cavab vermə bacarıqlarının yaradılmasına diqqət yetirir.",
    },
    
    {
      title: "Problem Ovçusu",
      image: bugbounty,
      link: '/az/learn/content/bugbounty',
      description:
        "Problem Ovçusu yolu (Bug Bounty) mükafatlar üçün sistemlərdə zəiflikləri aşkar etmək və bildirmək istəyən kibertəhlükəsizlik həvəskarları üçündür.",
    },
    {
      title: "Rəqəmsal Məhkəmə",
      image: forensics,
      link: '/az/learn/content/digitalforensics',
      description:
        "Rəqəmsal Məhkəmə Yolu (Digital Forensics), hüquqi və istintaq məqsədləri üçün rəqəmsal sübutları araşdırmaq və təhlil etmək istəyən peşəkarlar üçündür.",
    },
  ];

  return (
  
  <>
  <NavbarAz />
    
    <div className={styles["paths-container"]}>
      <h1 className={styles["paths-title"]}>Kibertəhlükəsizlikdə Karyera Yolları</h1>
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
