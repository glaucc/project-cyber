'use client';

import styled, { keyframes } from "styled-components";
import FeaturedCourses from "@/components/FeaturedCourses";
import CallToAction from "../components/CallToAction";
import FeaturedPaths from "../components/FeaturedPaths";
import Testimonials from "../components/Testimonials";
import './globals.css';


const fadeInUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NotificationH1 = styled.h1`
  // background-color: #007bff;
  color: #fff;
  font-size: 28px; /* Adjusted font size to make it more welcoming */
  padding: 10px 40px; /* Adjusted vertical padding */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeInUpAnimation} 0.8s ease;

  background: linear-gradient(45deg, #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;

  @media only screen and (max-width: 600px) {
    font-size: 28px;
    padding: 15px 30px;
  }
`;

const GapDiv = styled.div`
  padding: 40px 0; /* Add padding to create a gap between the notification and call to action */
`;

const Home = () => {
  return (<>
      <>
      
      <NotificationH1>Welcome to our Online Cybersecurity Learning Platform 👋</NotificationH1>
      {/* Other content of your homepage goes here */}
      {/* <div class="gradient-element"></div> */}
      <GapDiv>
        <CallToAction />
      </GapDiv>
      <FeaturedCourses />
      <FeaturedPaths />
      <Testimonials />
      </>
  </>
  );
};

export default Home;
