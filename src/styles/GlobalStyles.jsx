import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-primary: #0A0A2A;
    --bg-secondary: #1C1C3A;
    --text-primary: #FFFFFF;
    --text-secondary: #B0B0D0;
    --highlight-gold: #FFD700;
    --accent-pink: #FF6EB4;
    --button-hover-gold: #FFEA00;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 700;
  }

  p {
    color: var(--text-secondary);
  }

  a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.3s ease;
  }
`;

export default GlobalStyles;