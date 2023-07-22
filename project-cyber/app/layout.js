'use client'

import styled, { keyframes } from "styled-components";
import React from "react";
import { Inter } from "next/font/google";
import { createGlobalStyle } from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Create a GlobalStyle component to apply the Inter font globally
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  /* Other global styles or CSS resets can go here */

  /* Apply the Inter font to the body element */
  body {
    font-family: 'Inter', sans-serif;
  }
  `;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// const inter = Inter({ subsets: ['latin'] })
// className={inter.className}

const RootLayout = ({ children }) => (
    <html lang="en">
      <body >
        
        <GlobalStyle />
        <Navbar />
        
        <ContentContainer>
          {children}
        </ContentContainer>

        <Footer />
        
        </body>
    </html>
  )


export default RootLayout;
