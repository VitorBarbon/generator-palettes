import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 62,5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    background: ${theme.colors.mediumGray};
  }
  
    #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol{
    margin: ${({ theme }) => theme.spacings.large} 0;
    padding: ${({ theme }) => theme.spacings.large} 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
