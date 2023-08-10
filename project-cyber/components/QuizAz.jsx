import React, { useState } from "react";
import styles from "../styles/Quiz.module.scss";

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  let [score, setScore] = useState({});

  const quiz = {
    1: {
      order: 1,
      question: "If I was stranded on an island, the first thing I would do is...",
      options: [
        {
          text: "Try and build a raft home",
          job: "pt",
        },
        {
          text: "Scope the landscape for potential threats",
          job: "sa",
        },
        {
          text: "Gather food and plan next steps",
          job: "ir",
        },
        {
          text: "Find a way to send an SOS",
          job: "rt",
        },
        {
          text: "Build a secure shelter to prevent potential attacks",
          job: "se",
        },
      ],
    },
    2: {
      order: 2,
      question: "In my spare time, I like to...",
      options: [
        {
          text: "Tinker with new technology and understand how it works",
          job: "pt",
        },
        {
          text: "Watch crime-solving tv shows",
          job: "sa",
        },
        {
          text: "Keep busy by learning something new",
          job: "ir",
        },
        {
          text: "Find geocaches in my neighbourhood",
          job: "rt",
        },
        {
          text: "Upkeep and maintain my home through DIY projects",
          job: "se",
        },
      ],
    },
    3: {
      order: 3,
      question: "If I could buy a fictional celebrity dinner, it would be...",
      options: [
        {
          text: "Tony Stark, Iron Man",
          job: "pt",
        },
        {
          text: "Sherlock Holmes",
          job: "sa",
        },
        {
          text: "Yoda, Star Wars",
          job: "ir",
        },
        {
          text: "Bruce Wayne, Batman",
          job: "rt",
        },
        {
          text: "Walter White, Breaking Bad",
          job: "se",
        },
      ],
    },
    4: {
      order: 4,
      question: "My favourite game is...",
      options: [
        {
          text: "Battleships",
          job: "pt",
        },
        {
          text: "Cluedo",
          job: "sa",
        },
        {
          text: "Chess",
          job: "ir",
        },
        {
          text: "Hide and seek",
          job: "rt",
        },
        {
          text: "Risk",
          job: "se",
        },
      ],
    },
    5: {
      order: 5,
      question: "I’m best described as...",
      options: [
        {
          text: "Curious",
          job: "pt",
        },
        {
          text: "Strategical",
          job: "sa",
        },
        {
          text: "Calm under pressure",
          job: "ir",
        },
        {
          text: "Mischievous",
          job: "rt",
        },
        {
          text: "Practical",
          job: "se",
        },
      ],
    },
    6: {
      order: 6,
      question: "My favourite movie is...",
      options: [
        {
          text: "Back to the future",
          job: "pt",
        },
        {
          text: "Matrix",
          job: "sa",
        },
        {
          text: "Terminator",
          job: "ir",
        },
        {
          text: "Indiana Jones",
          job: "rt",
        },
        {
          text: "Jurassic Park",
          job: "se",
        },
      ],
    },
  };

  const handleOptionSelect = (job) => {
    if (score[job]) {
      setScore({ ...score, [job]: score[job] + 1 });
    } else {
      setScore({ ...score, [job]: 1 });
    }

    if (questionNumber + 1 <= Object.keys(quiz).length) {
      setQuestionNumber(questionNumber + 1);
      setSelectedOption("");
    } else {
      setQuizCompleted(true);
    }
  };


  const showQuestion = (questionNumber) => {
    const currentQuestion = quiz[questionNumber];
    return (
      <div className={styles["quiz-question-container"]}>
        <h1 className={styles["quiz-question"]}>{currentQuestion.question}</h1>
        <div className={styles["quiz-options"]}>
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`${styles["quiz-option"]} ${
                option.job === selectedOption ? styles["selected"] : ""
              }`}
              onClick={() => setSelectedOption(option.job)}
            >
              {option.text}
            </div>
          ))}
        </div>
        <div className={styles["quiz-progress"]}>
          {questionNumber} / {Object.keys(quiz).length}
        </div>
      </div>
    );
  };


  const renderQuiz = () => {
    if (quizCompleted) {
      const winner = getLargestScore();
      return (
        <div className={styles["quiz-result"]}>
          <h2>Congratulations!</h2>
          <p>
            Based on your answers, you are best suited for the{" "}
            <strong>{jobs[winner.name].title}</strong> role.
          </p>
          <div className={styles["job-details"]}>
            <h3>Job Summary:</h3>
            <p>{jobs[winner.name].summary}</p>
            <h3>Job Description:</h3>
            <p>{jobs[winner.name].description}</p>
            <h3>Responsibilities:</h3>
            <ul>
              {jobs[winner.name].responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            {/* Add more job details as needed */}
          </div>
          {/* <button className={styles["quiz-restart-button"]} onClick={() => restartQuiz()}>
            Restart Quiz
          </button> */}
        </div>
      );
    } else {
      const currentQuestion = quiz[questionNumber];
      return (
        <div className={styles["quiz-question-container"]}>
          <h1 className={styles["quiz-question"]}>{currentQuestion.question}</h1>
          <div className={styles["quiz-options"]}>
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`${styles["quiz-option"]} ${
                  option.job === selectedOption ? styles["selected"] : ""
                }`}
                onClick={() => setSelectedOption(option.job)}
              >
                {option.text}
              </div>
            ))}
          </div>
          <div className={styles["quiz-progress"]}>
            {questionNumber} / {Object.keys(quiz).length}
          </div>
        </div>
      );
    }
  };
  

  



const getLargestScore = () => {
  let winner = { name: "pt", points: 1 };
  for (const el of Object.keys(score)) {
    if (winner.points < score[el]) {
      winner.name = el;
      winner.points = score[el];
    }
  }
  return winner;
};

const jobs = {
    pt: {
      title: "Penetration Tester",
      animation: "https://lottie.host/dd1f913b-850b-4f8b-b012-a98d0cb8abd5/icNm6Sz9C7.json",
      summary: "Responsible for testing technology products for security loopholes.",
      description: "You may see penetration testing referred to as pentesting and ethical hacking. A penetration tester's job role is to test the security of the systems and software within a company - through attempts to uncover flaws and vulnerabilities through systemized hacking. Penetration testers exploit these vulnerabilities to evaluate the risk in each instance. The company can then take these insights to rectify issues to prevent a real-world cyber attack.",
      responsibilities: [
        "Conduct tests on computer systems, networks, and web-based applications",
        "Perform security assessments, audits, and analyze policies",
        "Evaluate and report on insights, recommending actions for attack prevention",
      ],
      paths: ["presecurity", "jrpentester", "offensivepentesting"],
    },
    sa: {
      title: "Security Analyst",
      animation: "https://lottie.host/ea240b84-ea83-4cce-8d3a-6c509bc6d181/5AUh5Mxe7G.json",
      summary: "Responsible for monitoring and protecting an organization's IT infrastructure.",
      description: "Security Analysts play a crucial role in monitoring and protecting an organization's IT infrastructure from potential cyber threats. They analyze and respond to security incidents, conduct regular security audits, and implement security measures to safeguard against data breaches and attacks. Security Analysts also assist in developing and implementing security policies and procedures, as well as staying up-to-date with the latest security technologies and best practices.",
      responsibilities: [
        "Monitor and analyze security events and incidents",
        "Implement and maintain security tools and technologies",
        "Respond to security incidents and coordinate with relevant teams",
      ],
      paths: ["presecurity", "jrsecurityanalyst", "securityoperations"],
    },
    ir: {
      title: "Incident Responder",
      animation: "https://lottie.host/f492af56-94e1-4ce2-8b33-ff4cb26b0623/EU3uHPE5X7.json",
      summary: "Responsible for responding to and investigating cybersecurity incidents.",
      description: "Incident Responders are the first line of defense against cyber attacks. Their primary role is to detect, respond to, and investigate security incidents within an organization's network or systems. They work to contain and mitigate the impact of incidents, collect evidence for forensic analysis, and develop strategies to prevent similar incidents in the future. Incident Responders collaborate with other security teams to identify vulnerabilities and improve incident response procedures.",
      responsibilities: [
        "Respond to and investigate security incidents",
        "Contain and mitigate the impact of security breaches",
        "Conduct post-incident analysis and prepare reports",
      ],
      paths: ["presecurity", "jrine", "incidentresponse"],
    },
    rt: {
      title: "Red Teamer",
      animation: "https://lottie.host/6e103b58-0026-4a35-8a5c-6de68bdf62b2/gOwDvj4WVn.json",
      summary: "Responsible for simulating cyber attacks to test an organization's defenses.",
      description: "Red Teamers are cybersecurity professionals who conduct simulated cyber attacks on an organization's systems to evaluate and test their defenses. The goal of a Red Teamer is to identify vulnerabilities and weaknesses in an organization's security measures and help improve its overall resilience against real-world cyber threats. They work closely with Blue Teamers (defenders) to assess an organization's cybersecurity posture and identify areas for improvement.",
      responsibilities: [
        "Conduct simulated cyber attacks and penetration tests",
        "Identify security weaknesses and vulnerabilities",
        "Collaborate with Blue Teamers to improve defenses",
      ],
      paths: ["presecurity", "jrredteamer", "offensivesecurity"],
    },
    se: {
      title: "Security Engineer",
      animation: "https://lottie.host/6a10c641-095d-41fc-9c3d-e98e4ff88bf0/5POrwBnrvb.json",
      summary: "Responsible for designing and implementing security solutions.",
      description: "Security Engineers are responsible for designing, implementing, and maintaining an organization's security solutions and infrastructure. They work to create secure network architectures, configure firewalls and intrusion detection systems, and develop security policies and procedures. Security Engineers also conduct security assessments and collaborate with other teams to ensure the protection of an organization's data and information.",
      responsibilities: [
        "Design and implement security solutions and architectures",
        "Configure and manage security tools and technologies",
        "Conduct security assessments and vulnerability testing",
      ],
      paths: ["presecurity", "jrsecurityengineer", "securityengineering"],
    },
  };
  

function showQuiz(show) {
    const jobTypeEl = document.querySelector("#job-types");
    const quizQuestEl = document.querySelector("#quiz-questions");

    if (jobTypeEl && quizQuestEl) { // Check if the elements are found
      if (show) {
        jobTypeEl.style.display = "none";
        quizQuestEl.style.display = "flex";
      } else {
        jobTypeEl.style.display = "grid";
        quizQuestEl.style.display = "none";
      }
    } else {
      console.error("Elements with IDs 'job-types' and 'quiz-questions' not found in the DOM.");
    }
  }

let load = {
  onQuestion: 1,
  maxQuestions: Object.keys(quiz).length,
};

const restartQuiz = () => {
    score = {};
    setQuestionNumber(1);
    setSelectedOption("");
    setQuizCompleted(false);
    // Refresh the page to restart the quiz
    window.location.reload();
};

return (
    <div className={styles["quiz-container"]}>
      <div className={styles["quiz-header"]}>
        <h1 className={styles["quiz-title"]}>Cyber Security Careers Quiz</h1>
        <p>Do a quick quiz and find out your ideal cyber security career!</p>
      </div>
      {/* Display the quiz question */}
      {renderQuiz()}
      <div className={styles["quiz-footer"]}>
        {!quizCompleted && (
          <button
            className={styles["quiz-submit-button"]}
            onClick={() => handleOptionSelect(selectedOption)}
            disabled={!selectedOption}
          >
            Next
          </button>
        )}
        {quizCompleted && (
          <button
            className={styles["quiz-restart-button"]}
            onClick={() => restartQuiz()}
          >
            Restart Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;





