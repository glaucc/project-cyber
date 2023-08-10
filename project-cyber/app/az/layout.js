'use client'

import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Footer from "@/components/FooterAz";
import '@fortawesome/fontawesome-free/css/all.css';
import './globals.scss'





  
// const ContentContainer = styled.div`
// max-width: 1200px;
// padding: 20px;
// `;
// margin: 0 auto;


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');


/* Other global styles or CSS resets can go here */

/* Apply the Inter font to the body element */

body {
  font-family: 'Inconsolata', monospace;  
`;
  
  // background-color: ${(props) => props.theme.backgroundColor};
  // color: ${(props) => props.theme.textColor};
  
  // a {
  // color: ${(props) => props.theme.textColor};
  // text-decoration: none;
  // }
  
  // a:hover {
  // color: ${(props) => props.theme.linkHoverColor};
  // }
  
  
// }



// const inter = Inter({ subsets: ['latin'] })
// className={inter.className}




const RootLayout = ({ children }) => {

  
  // Create a GlobalStyle component to apply the Inter font globally
    
    
    // style={{scrollBehavior:'smooth'}
    return (
    <html lang="en">
      <body>
          <GlobalStyle />
          {/* <ContentContainer> */}
          <div className="ContentContainer">
            {children}

          </div>
          {/* </ContentContainer> */}
          {/* <Footer /> */}
      </body>
    </html>
  );
};


export default RootLayout;
