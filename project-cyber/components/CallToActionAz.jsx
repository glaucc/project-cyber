import React from "react";
import styled from "styled-components";
import "../styles/CallToAction.scss"; // Import the CSS file
import Link from 'next/link';



const CtaContainer = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 80px;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const CtaDescription = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

const CtaButton = styled.a`
  color: #fff;
  background-color: #007bff;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 2px solid #fff; /* Add a 2px white border to the button */

  &:hover {
    background-color: #0056b3;
  }

  @media only screen and (max-width: 425px) {
    ctabutton {
      max-width: 100vw;
    }
  }
`;

const CallToAction = () => {
  return (
    <CtaContainer>
      <CtaTitle>Elə Bu gün kibertəhlükəsizlik səyahətinə başla!</CtaTitle>
      <CtaDescription>
      Onlayn öyrənmə platformamıza qoşulun və rəqəmsal dünyada özünüzü və başqalarını qorumaq üçün bacarıqlar əldə edin.
      </CtaDescription>
      <Link href='/signup'>
      <CtaButton className="ctabtn">Pulsuz Başla</CtaButton>
      </Link>
    </CtaContainer>
  );
};

export default CallToAction;
