import React, { useState } from "react";
import styled from "styled-components";
import topicsData from "../data/learn.json";
import quotesData from "../data/quotes.json";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import '../styles/navbar.css';


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
          <Navbar />

    <div className="learn-container">

      <div className="quote-header">
        {/* <h1>Cybersecurity Fundamentals for Beginners</h1> */}
        <p>{getRandomQuote().quote}</p>
        <p>- {getRandomQuote().author}</p>
      </div>

      

      <div className="content-learn">
        {Object.entries(topicsData).map(([step, topics]) => (
          <div key={step}>
            <div className="topic-container">

            {topics.map((topic) => (
              <TopicContainer
              className="topics-container"
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
          </div>
        ))}
      </div>

      <Link href="/paths">
        <div className="learn-btn-container">
          <span>Browse Career Paths</span>
        </div>
      </Link>

    </div>
    </>
    );
};

export default LearnPage;
