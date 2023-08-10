'use client';


// Learning.js
import React, { useState } from "react";
import Head from "next/head";
import styles from "./Learning.module.scss";
import { Link } from "react-scroll";

const Learning = () => {
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const correctAnswer = ""; // Replace with the correct answer

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
        <title>Final Thoughts</title>
        <meta name="description" content="Learning Page for Learners" />
      </Head>

      <main className={styles.main}>
        <div className={styles.textSection}>
          <div className={styles.contentSection}>
            <h1 className={styles.heading}>Final Thoughts</h1>
            <p>
            You may have been told in school that there are good sources and bad sources of information. That may be true when it comes to essays and referencing information; however, it's my pleasure to state that it does not apply here. Any information can potentially be useful -- so feel free to use blogs, wikipedia, or anything else that contains what you're looking for! Blogs especially can often be very valuable for learning when it comes to information security, as many security researchers keep a blog.

</p><br />
            <p>
            Having completed this room, you hopefully now have established the basis of a methodology to tackle research questions that you come across by yourself. The vast majority of rooms on Bruto can be solved purely using knowledge found on Google, so please take the opportunity to improve your skills by Googling any problems you come across!
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
              placeholder="No Answer Needed"
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

