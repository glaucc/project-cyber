  'use client';


  // Learning.js
  import React, { useState } from "react";
  import Head from "next/head";
  import styles from "./Learning.module.scss";
  import Image from "next/image";
  import Link from "next/link";
 
  const questions = [
    {
      question: "SCP is a tool used to copy files from one computer to another. What switch would you use to copy an entire directory?",
      correctAnswer: "-r",
      hint: "man scp",
    },
    {
      question: "There was a Local Privilege Escalation vulnerability found in the Debian version of Apache Tomcat, back in 2016. What's the CVE for this vulnerability?",
      correctAnswer: "CVE-2016-1240",
      hint: 'You can use exploitDB',
    },
    {
      question: "What is the very first CVE found in the VLC media player?",
      correctAnswer: "CVE-2007-0017",
      hint: 'exploitDB',
    },
    {
      question: " If you wanted to exploit a 2020 buffer overflow in the sudo program, which CVE would you use?",
      correctAnswer: "CVE-2019-18634",
      hint: 'search sudo',
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
          <title>Vulnerability Searching</title>
          <meta name="description" content="Learning Page for Learners" />
        </Head>

        <main className={styles.main}>
          <div className={styles.textSection}>
            <div className={styles.contentSection}>
              <h1 className={styles.heading}>Manual Pages</h1>
              <p>
              If you haven't already worked in Linux, take a look at the <Link href='/learn/content/material/beginner/linux-fundamentals'>Linux Fundamentals</Link> module. Linux (usually Kali Linux) is without a doubt the most ubiquitous operating system used in hacking, so it pays to be familiar with it!
              </p><br />
              <p>One of the many useful features of Linux is the inbuilt <code className={styles.codeStyle}>man</code> command, which gives you access to the manual pages for most tools directly inside your terminal. Occasionally you'll find a tool that doesn't have a manual entry; however, this is rare. Generally speaking, when you don't know how to use a tool, <code className={styles.codeStyle}>man</code> should be your first port of call.
              </p>

              <br />
              <p>
              Let's give this a shot!
</p><br />
<p>
Say we want to connect to a remote computer using SSH, but we don't know the syntax. We can try man ssh to get the manual page for SSH:
</p>
<br />

              <Image src='/static/man1.png' width={1167.5} height={283.875} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <br /> 
<p>Awesome!
</p>
<br></br>
<p>We can see in the description that the syntax for using SSH is &#60;user&#62;@&#60;host&#62;:
</p><br></br>
            <Image src='/static/man2.png' width={1151.25} height={36} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <br /> 
        <p>We can also use the man pages to look for special switches in programs that make the program do other things. An example of this would be that (from our very first example) steghide can be used to both extract and embed files inside an image, based on the switches that you give it. 
</p>
<br></br>        
    <p>For example, if you wanted to display the version number for SSH, you would scroll down in the <code className={styles.codeStyle}>man</code> page until you found an appropriate switch:
</p>   
<Image src='/static/man3.png' width={404} height={33} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
<br></br><p>Then use it:
</p>        
<Image src='/static/man4.png' width={489} height={33} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
<br></br>
        <p>Another way to find that switch would have been to search the <code className={styles.codeStyle}>man</code> page for the correct switch using grep:
</p>
<Image src='/static/man5.png' width={483} height={35} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>

<br></br>
<br></br>
<p>Now your turn! Answer the following questions using the <code className={styles.codeStyle}>man</code> command:
</p>
<br></br>
<p>You can <Link href='/learn/content/material/beginner/beginner-introduction/introductory-researching/manual-pages/terminal'>click here</Link> to use our terminal (recommended) or use your own virtual machine</p>


            </div>
          </div>


  {/* End of content */}





{/* Terminal */}
<div className={styles.buttonContainer}>
<Link href="/learn/content/material/beginner/beginner-introduction/introductory-researching/manual-pages/terminal">
          <a className={styles.buttonContainer}>
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
        placeholder="Your answer"
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

