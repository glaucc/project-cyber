// CybersecurityTopics.js

import React, { useState } from "react";
import styled from "styled-components";
import topicsData from "../data/learn.json";

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

  return (
    <div>
      <h1 className="header-learn">Cybersecurity Fundamentals for Beginners</h1>
      {Object.entries(topicsData).map(([step, topics]) => (
        <div key={step}>
          <h2>Step {step.slice(4)}</h2>
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
  );
};

export default LearnPage;
