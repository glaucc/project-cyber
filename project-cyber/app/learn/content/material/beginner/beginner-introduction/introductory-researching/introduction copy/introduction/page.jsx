'use client';


// Learning.js
import React, { useState } from "react";
import Head from "next/head";
import styles from "./Learning.module.scss";
import { Link } from "react-scroll";

const Learning = () => {
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const correctAnswer = "security analyst"; // Replace with the correct answer

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setShowResult(false); // Hide the result as you type
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Page</title>
        <meta name="description" content="Learning Page for Learners" />
      </Head>

      <main className={styles.main}>
        <div className={styles.textSection}>
          <div className={styles.contentSection}>
            <h1 className={styles.heading}>Learning Page</h1>
            <p>
            This is the second major area within Security. While Offensive Security involves actively finding vulnerabilities and misconfigurations within technologies, Defensive Security involves detecting and stopping these attacks.            </p><br />
            <p>
            This career track is for you if:
            </p><br />
            <ul>
              <li>&emsp;you are analytical</li>
              <li>&emsp;you enjoy problem solving</li>
            </ul>
            <br />
            <p>
            One of the careers under this track is a Security Analyst. This is an individual in an organisation who's job is to monitor various systems in the organisation and detect whether any of these systems are being attacked. To do this, you need to understand how underlying technologies work and then understand what attacks against these technologies look like.             </p><br />
            <ul>
              <li>&emsp;web application security</li>
              <li>&emsp;network security</li>
              <li>&emsp;use of programming languages to write various scripts</li>
            </ul>
            <br />
            <p>
            While a Security Analyst deals with detecting attacks, an Incident Responder is usually brought in once an attack has already occurred. Their main responsibilities include understanding what actions an attacker has taken in the organisation and what the impact of their actions will be. Incident Responders also need to know how underlying technologies work and what potential attacks could be carried out against a system.            </p>
            <br />
            <p>
            While this is a very specialist role, malware analysis is quite common when detecting and responding to attacks. Malicious actors would use malicious pieces of software in any stage of their attack cycle from gaining access to a system to maintaining persistence. If you can understand what exactly this malware is doing, you can prevent further abuse and also identify the malicious action.
            </p><br />
            <p>
            We also have a <Link href="/learn/content/cyberdefense">Cyber Defence</Link> pathway that covers a broad set of skills, tools and methodologies that would allow you to understand the fundamentals required for entry level Blue Team roles.
            </p><br />
          
          
          </div>
        </div>

        <div className={styles.inputSection}>
          <h2 className={styles.subHeading}>Question:</h2>
          <p>What is the name of the career role that is legally employed to find vulnerabilities in applications?
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              value={answer}
              onChange={handleInputChange}
              placeholder="Your answer"
            />
            <button type="button" className={styles.submitButton} onClick={handleCheckAnswer}>Check Answer</button>
          </form>
          {showResult && ( // Show result only when showResult is true (after clicking Check Answer)
            <div className={styles.result}>
              {answer.toLowerCase() === correctAnswer.toLowerCase() ? (
                <>
                  <p className={styles.correctAnswer}>
                    Correct! Your answer is right.
                  </p>
                </>
              ) : (
                <p className={styles.incorrectAnswer}>
                  Sorry, your answer is incorrect. Try again!
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Learning;

