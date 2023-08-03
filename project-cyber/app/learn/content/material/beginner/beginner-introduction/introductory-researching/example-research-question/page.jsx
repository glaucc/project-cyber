  'use client';


  // Learning.js
  import React, { useState } from "react";
  import Head from "next/head";
  import styles from "./Learning.module.scss";
  import Image from "next/image";
  // import search from '../../../../../../../../public/static/google-search.png';
  // import search2 from '../../../../../../../../public/static/google-search2.png';
  // import search3 from '../../../../../../../../public/static/google-search3.png';
  // import search4 from '../../../../../../../../public/static/google-search4.png';
  // import search5 from '../../../../../../../../public/static/google-search5.png';
  // import command from '../../../../../../../../public/static/command-implementation.png';
  // import command2 from '../../../../../../../../public/static/command2.png';

  const questions = [
    {
      question: "In the Burp Suite Program that ships with Kali Linux, what mode would you use to manually send a request (often repeating a captured request numerous times)?",
      correctAnswer: "",
      hint: 'Search for => manually send request burp suite',
    },
    {
      question: "What hash format are modern Windows login passwords stored in?",
      correctAnswer: "",
      hint: 'Search for => hashing algorithm for windows',
    },
    {
      question: "What are automated tasks called in Linux?",
      correctAnswer: "",
      hint: 'Search for => automated tasks Linux',
    },
    {
      question: "What number base could you use as a shorthand for base 2 (binary)?",
      correctAnswer: "",
      hint: 'Octal (base 8) is not the correct answer.',
    },
    {
      question: "If a password hash starts with $6$, what format is it (Unix variant)?",
      correctAnswer: "SHA-512",
      hint: '___-___',
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
          <title>Learning Page</title>
          <meta name="description" content="Learning Page for Learners" />
        </Head>

        <main className={styles.main}>
          <div className={styles.textSection}>
            <div className={styles.contentSection}>
              <h1 className={styles.heading}>Learning Page</h1>
              <p>
              We'll begin by looking at a typical research question: the kind that you're likely to find when working through a CTF.
              </p><br />
              <p>
              Let's say you've downloaded a JPEG image from a remote server. You suspect that there's something hidden inside it, but how can you get it out?
  How about we start by searching for “hiding things inside images” in Google:
              </p><br />
              <Image src='/static/google-search.png' width={771} height={476} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <br /> 
              <p>
              Notice that the second link down gives us the title of a technique: “Steganography”. You can then click that link and read the document, which will teach you how files are hidden inside images.
              </p>
              <br />
              <p>
              Ok, so we know how it's done, let's try searching for a way to extract files using steganography:
              </p><br />
              <Image src='/static/google-search2.png' width={771} height={476} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <br />
              <p>
              Already virtually every link is pointing to something useful. The first link contains a collection of useful tools, the second is more instructions on how to perform steganography in the first place. Realistically any of these links could prove useful, but let's take a look at that first one <a target="_blank" href='https://0xrick.github.io/lists/stego/'>(https://0xrick.github.io/lists/stego/)</a>:

              </p>
              <br />
              <Image src='/static/google-search3.png' width={850} height={400} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <p>
              The very first tool there looks to be useful. It can be used to extract embedded data from JPEG files -- exactly what we need it to do! This page also tells you that steghide can be installed using something called “apt”.
              </p><p>Let's search that up next!</p>
              <br />
              <Image src='/static/google-search4.png' width={750} height={550} alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <br />
              <p>Great -- so apt is a package manager that lets us install tools on Linux distributions like Ubuntu (or Kali!).</p><p>
  How can we install packages using apt? Let's search it!</p>
              <br />
              <Image width={879} height={653} src='/static/google-search5.png' alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <br />
              <p>Perfect -- right at the top of the page we're given instructions. We know that our package is called steghide, so we can go ahead and install that:
  </p>
  <br></br>
              <Image width={898} height={357} src='/static/command-implementation.png' alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <br></br>
              <p>Now, let's switch back to that collection of steganography tools we were looking at before. Did you notice that there were instructions on how to use steghide right there?
  </p>
    `         <br></br>
              <Image width={806} height={102} src='/static/command2.png' alt="bruto-free-online-cybersecurity-learning-platform-google-search"></Image>
              <br></br>

  <p>There we go! That's how we can extract an image from a file. Our research has paid off and we can now go and complete the task.

  </p>
  <br></br>
  <br></br>
  <p>Notice the methodology here. We started with nothing, but gradually built up a picture of what we needed to do. We had a question (How can I extract data from this image).</p><br></br> <p>We searched for an answer to that question, then continued to query each of the answers we were given until we had a full understanding of the topic. This is a really good way to conduct research: Start with a question; get an initial understanding of the topic; then look into more advanced aspects as needed.</p>

  <br></br>
  <p>Now it's your turn. See if you can answer the following questions using your research skills. The first three questions have appropriate search queries in the hints:

  </p>
            </div>
          </div>


  {/* End of content */}


















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

