'use client';


// Learning.js
import React, { useState } from "react";
import Head from "next/head";
import styles from "./Learning.module.scss";

const Learning = () => {
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const correctAnswer = "penetration tester"; // Replace with the correct answer

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
              The first large area within Cyber Security is the offensive side. This area involves attacking different applications and technologies to discover vulnerabilities.
            </p><br />
            <p>
              This career is for you if:
            </p><br />
            <ul>
              <li>&emsp;you enjoy understanding how things work</li>
              <li>&emsp;you are analytical</li>
              <li>&emsp;you like thinking out of the box</li>
            </ul>
            <br />
            <p>
              The most common offensive security job role is a penetration tester. A penetration tester is an individual that is legally employed by an organisation to find vulnerabilities in their products. A penetration tester usually requires a broad range of knowledge including:
            </p><br />
            <ul>
              <li>&emsp;web application security</li>
              <li>&emsp;network security</li>
              <li>&emsp;use of programming languages to write various scripts</li>
            </ul>
            <br />
            <p>
              More recently, cloud security has also been gaining popularity as various organisations are now shifting their infrastructure to cloud providers such as AWS and Azure.
            </p>
            <br />
            <p>It's also possible to have a speciality in one of these topics, however a broad knowledge is the best way to start out.
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
