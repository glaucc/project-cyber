//** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  } 
  };

 

  
  module.exports = nextConfig;
  