'use client'

import styled, { keyframes } from "styled-components";
import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-free/css/all.css';


import { ThemeProvider, useTheme, darkTheme } from "../components/ThemeContext";




  
const ContentContainer = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 20px;
`;




// background-color: ${(props) => props.theme.backgroundColor};
// color: ${(props) => props.theme.textColor};

// }

// a {
// color: ${(props) => props.theme.textColor};
// text-decoration: none;
// }

// a:hover {
// color: ${(props) => props.theme.linkHoverColor};
// }
// const inter = Inter({ subsets: ['latin'] })
// className={inter.className}




const RootLayout = ({ children }) => {
  console.log(2)


  const { theme } = useTheme();
// Create a GlobalStyle component to apply the Inter font globally
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  /* Other global styles or CSS resets can go here */

  /* Apply the Inter font to the body element */
  
  body {
    font-family: 'Inter', sans-serif;
  
  `;


  console.log(3)

  return (
    <html lang="en">
      <body>
        <ThemeProvider style={theme}>
          <GlobalStyle />
          <Navbar />
          <ContentContainer>
            {children}
          </ContentContainer>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};


export default RootLayout;
