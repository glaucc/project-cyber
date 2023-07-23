import React from "react";
import styled from "styled-components";
import subheadersData from "../data/subheaders.json"; // Importing the JSON data for subheaders

// Styled component for the main container of the footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1.25rem; /* 20px in rem units */
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: flex-start;

  @media only screen and (min-width: 768px) {
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    max-width: 100vw;
  }
`;
const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly !important;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

`;
// Styled component for the text in the footer
const FooterText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.625rem; /* 10px in rem units */
  flex: 1; /* Take up available space in the container */
  max-width: 100%; /* Ensure the text stays in a single line */

  @media only screen and (min-width: 768px) {
    text-align: center; /* Center the text on larger screens */
  }

  @media only screen and (min-width: 425px) {
    justify-content: flex-end; /* Align social links to the right */
  }

  @media only screen and (width: 390px) {
    margin-left: 1.1vw; /* Align social links to the right */
  }

`;

// Styled component for the links in the footer
const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 0.625rem; /* 10px in rem units */
    margin-bottom: 0.625rem; /* 10px in rem units */
  }
`;

// Styled component for the container of social icons
const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end; /* Align social links to the right */
  
  @media only screen and (min-width: 768px) {
    flex-basis: 100%; /* Force social links to take up the full width on laptop screens */
  }
  `;
  
// Styled component for the container of "Developed by" text
const DevelopedByContainer = styled.div`
  
  display: flex;
  width: 80vw;
  align-items: center;
  margin-right: 0.625rem; /* 10px in rem units */

  @media only screen and (min-width: 768px) {
    margin-right: 0;
  }
`;

// Styled component for the icon with text
const IconText = styled.span`
  margin-left: 0.3125rem; /* 5px in rem units */
`;

// Styled component for each block in the footer
const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  font-size: 0.9rem; /* Adjust the font size as needed */
  margin-left: 0; /* Align the block headers to the start */

`;

// Styled component for the container of subheaders in each block
const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align subheaders vertically within the block */

  @media only screen and (min-width: 768px) {
    align-items: flex-start; /* Align subheaders to start from the left */
  }
`;

// Styled component for the header in each block with larger font size and aligned to start from left
const CategoryHeader = styled.h3`
  margin: 0.3125rem 0; /* 5px top and bottom, 50px left and right in rem units */
  font-size: 1.5rem; /* Larger font size for headers */
  text-align: left;
`;

// Styled component for the horizontal line
const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #fff;
  margin: 0.9375rem 0; /* 15px top and bottom in rem units */
`;

// Styled component for the subheaders as hoverable links
const SubHeaderLink = styled.a`
  color: #bbb;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

// Styled component for the container of Trending section
const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Styled component for the header of Trending section
const TrendingHeader = styled.h4`
  margin: 0.3125rem; /* 5px in rem units */
`;

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      {/* Block for Practice */}
      <Block>
        <TrendingContainer>
          <CategoryHeader>Practice</CategoryHeader>
          <CategoriesContainer>
            {subheadersData.practice.map((subheader) => (
              <SubHeaderLink key={subheader} href="#">
                {subheader}
              </SubHeaderLink>
            ))}
          </CategoriesContainer>
        </TrendingContainer>
      </Block>

      {/* Block for Careers */}
      <Block>
        <TrendingContainer>
          <CategoryHeader>Careers</CategoryHeader>
          <CategoriesContainer>
            {subheadersData.careers.map((subheader) => (
              <SubHeaderLink key={subheader} href="#">
                {subheader}
              </SubHeaderLink>
            ))}
          </CategoriesContainer>
        </TrendingContainer>
      </Block>

      {/* Block for Trending */}
      <Block>
        <TrendingContainer>
          <CategoryHeader>Trending</CategoryHeader>
          <CategoriesContainer>
            {subheadersData.trending.map((subheader) => (
              <SubHeaderLink key={subheader} href="#">
                {subheader}
              </SubHeaderLink>
            ))}
          </CategoriesContainer>
        </TrendingContainer>
      </Block>

      {/* Horizontal line */}
      <HorizontalLine />

      {/* Developed by */}
      <FooterContact>
      
        <DevelopedByContainer>

          <FooterText>Bruto Cybersecurity Learning Platform.</FooterText>
          <FooterText>
            Developed with <span style={{ color: "#e74c3c" }}>&hearts;</span> by{""}
            <FooterLink href="https://www.yourwebsite.com" target="_blank">
            Bruto
            </FooterLink>
          </FooterText>
        </DevelopedByContainer>

        {/* Social Icons */}
        <SocialIconsContainer>
          <FooterLink href="https://www.facebook.com/your-facebook-page" target="_blank">
            <i className="fab fa-facebook"></i>
            <IconText>Facebook{" "}</IconText>
          </FooterLink>
          <FooterLink href="https://www.twitter.com/your-twitter-page" target="_blank">
            <i className="fab fa-twitter"></i>
            <IconText>Twitter{" "}</IconText>
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/your-linkedin-page" target="_blank">
            <i className="fab fa-linkedin"></i>
            <IconText>LinkedIn{" "}</IconText>
          </FooterLink>
        </SocialIconsContainer>
      
      </FooterContact>


    </FooterContainer>
  );
};

export default Footer;
