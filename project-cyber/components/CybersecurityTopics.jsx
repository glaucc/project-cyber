import React, { useState } from "react";
import styled from "styled-components";
import topicsData from "../data/learn.json";
import quotesData from "../data/quotes.json";

// import { Link, animateScroll as scroll } from "react-scroll";
{/* <Link key={step} to={`#${step}`}> */}


import "../styles/learn.scss";

const TopicContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 4px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.linkHoverColor};
  }
`;

const LearnPage = () => {
  const [checkedTopics, setCheckedTopics] = useState([]);

  const toggleTopic = (topic) => {
    setCheckedTopics((prevTopics) =>
      prevTopics.includes(topic)
        ? prevTopics.filter((item) => item !== topic)
        : [...prevTopics, topic]
    );
  };

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
  };

  return (
    <>
      <div className="quote-header">
        {/* <h1>Cybersecurity Fundamentals for Beginners</h1> */}
        <p>{getRandomQuote().quote}</p>
        <p>- {getRandomQuote().author}</p>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Select Step</button>
        <div className="dropdown-content">
          {Object.keys(topicsData).map((step) => (
            <a key={step} href={`#${step}`}>
              {step}
            </a>
          ))}
        </div>
      </div>

      <div className="content-learn">
        {Object.entries(topicsData).map(([step, topics]) => (
          <div key={step}>
            <h2 id={step}>Step {step.slice(4)}</h2>
            {topics.map((topic) => (
              <TopicContainer
                key={topic}
                onClick={() => toggleTopic(topic)}
                style={{
                  backgroundColor: checkedTopics.includes(topic)
                    ? "#e6ffe6"
                    : "inherit",
                }}
              >
                <input
                  type="checkbox"
                  checked={checkedTopics.includes(topic)}
                  onChange={() => toggleTopic(topic)}
                />
                <label>{topic}</label>
              </TopicContainer>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default LearnPage;
