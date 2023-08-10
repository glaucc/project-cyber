  'use client';


  // Learning.js
  import React, { useState } from "react";
  import Head from "next/head";
  import styles from "./Learning.module.scss";
  import Image from "next/image";
  import Link from "next/link";
 
  const questions = [
    {
      question: "Read the chapter.",
      correctAnswer: "",
      hint: "No Hint",
    },
    
    // Add more questions as needed
    // {
    //   question: "Another question here?",
    //   correctAnswer: "Correct answer for the second question",
    // },
    // ...
  ];

  const Learning = () => {

    const [answers, setAnswers] = useState(Array(questions.length).fill(""));
    const [showResults, setShowResults] = useState(false);
    const [showHints, setShowHints] = useState(Array(questions.length).fill(false));
    const [checkedQuestionIndex, setCheckedQuestionIndex] = useState(-1); // Add the state for checked question index
  
    const handleInputChange = (index, value) => {
      const updatedAnswers = [...answers];
      updatedAnswers[index] = value;
      setAnswers(updatedAnswers);
      setShowResults(false); // Hide the results as you type
    };
  
    const handleCheckAnswer = (event, index) => {
      event.preventDefault(); // Prevent form submission and page refresh
      setShowResults(true);
      setCheckedQuestionIndex(index);
    };
  
    const toggleHint = (index) => {
      const updatedShowHints = [...showHints];
      updatedShowHints[index] = !updatedShowHints[index];
      setShowHints(updatedShowHints);
    };







    return (
      <div className={styles.container}>
        <Head>
          <title>Linux Part 1</title>
          <meta name="description" content="Linux Part 1 Learning Page for Learners" />
        </Head>

        <main className={styles.main}>
          <div className={styles.textSection}>
            <div className={styles.contentSection}>
              <h1 className={styles.heading}>Linux Part 1</h1>
              <p>
              Welcome to the first part of the "Linux Fundamentals" room series. You're most likely using a Windows or Mac machine, both are different in visual design and how they operate. Just like Windows, iOS and MacOS, Linux is just another operating system and one of the most popular in the world powering smart cars, android devices, supercomputers, home appliances, enterprise servers, and more.
              </p><br />
              <p>
              Linux is a command line operating system based on unix. There are multiple operating systems that are based on Linux.
              </p>

              <br />
              <p>
              We'll be covering some of the history behind Linux and then eventually starting your journey of being a Linux-wizard! This room will have you:
</p><br />
<ul>
              <li>&emsp;Running your very first commands in an interactive Linux machine in your browser</li>
              <li>&emsp;Teaching you some essential commands used to interact with the file system</li>
              <li>&emsp;Introduce you to how users and groups work on Linux (and what this means for us as penetration testers)</li>
            </ul>
<br></br>


            </div>
          </div>


  {/* End of content */}





{/* Terminal */}
<div className={styles.buttonContainer}>


<Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/manual-pages/terminal" passHref>
          <a target="_blank" rel="noopener noreferrer" className={styles.buttonContainer}>
            Open Terminal
          </a>
        </Link>

</div>











  {questions.map((questionObj, index) => (
  <div key={index} className={styles.inputSection}>
    <h2 className={styles.subHeading}>
      Question {index + 1}: {/* Add the question number here */}
    </h2>
    <p>{questionObj.question}</p>
    <div className={`${styles.hintContainer} ${showHints[index] ? styles.showHint : ""}`}>
      <button
        className={`${styles.buttonHint} ${showHints[index] ? styles.showHint : ""}`}
        type="button"
        onClick={() => toggleHint(index)}
      >
        Hint
      </button>
      {showHints[index] && (
        <p className="hintText">{questionObj.hint}</p>
      )}
    </div>
    <form onSubmit={(event) => handleCheckAnswer(event, index)}>
      <input
        className={styles.input}
        type="text"
        value={answers[index]}
        onChange={(e) => handleInputChange(index, e.target.value)}
        placeholder="No Answer Needed"
      />
      <button
        type="submit"
        className={styles.submitButton}
      >
        Check Answer
      </button>
      {showResults && checkedQuestionIndex === index && (
        <div
          className={`${styles.result} ${
            answers[index].toLowerCase() === questionObj.correctAnswer.toLowerCase()
              ? styles.correctAnswer
              : styles.incorrectAnswer
          }`}
        >
          {answers[index].toLowerCase() === questionObj.correctAnswer.toLowerCase() ? (
            <p>Correct! Your answer is right.</p>
          ) : (
            <p>Sorry, your answer is incorrect. Try again!</p>
          )}
        </div>
      )}
    </form>
  </div>
))}







        </main>
      </div>
    );
  };

  export default Learning;

