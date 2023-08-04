'use client';


// Learning.js
import React, { useState } from "react";
import Head from "next/head";
import styles from "./Learning.module.scss";

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
        <title>Learning Page</title>
        <meta name="description" content="Learning Page for Learners" />
      </Head>

      <main className={styles.main}>
        <div className={styles.textSection}>
          <div className={styles.contentSection}>
            <h1 className={styles.heading}>Introduction</h1>
            <p>
            Without a doubt, the ability to research effectively is the most important quality for a hacker to have. By its very nature, hacking requires a vast knowledge base — because how are you supposed to break into something if you don't know how it works? The thing is: no one knows everything. Everyone (professional or amateur, experienced or totally new to the subject) will encounter problems which they don't automatically know how to solve. This is where research comes in, as, in the real world, you can't ever expect to simply be handed the answers to your questions.            

</p>
            <br />
            <p>
            As your experience level increases, you will find that the things you're researching scale in their difficulty accordingly; however, in the field of information security, there will never come a point where you don't need to look things up.
  
            </p>
            <br />
            <p>This room will serve as a brief overview of some of the most important resources available to you, and will hopefully aid you in the process of building a research methodology that works for you.
</p>
<br />
<p>We will be looking at the following topics:
</p>
<br />
              
              <ul>
              <li>&emsp;An example of a research question</li>
              <li>&emsp;Vulnerability Searching tools</li>
              <li>&emsp;Linux Manual Pages</li>
            </ul>
            <br />
            <p>
            Let's begin.
            </p>
            <br />

            
          </div>
        </div>

        <div className={styles.inputSection}>
          <h2 className={styles.subHeading}>Question:</h2>
          <p>Read the Introduction
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              value={answer}
              onChange={handleInputChange}
              placeholder="No answer needed"
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

