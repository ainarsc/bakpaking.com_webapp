import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'raleway', sans-serif; 
    text-decoration: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.primaryLight};
    font-size: 16px;
    letter-spacing: 1px;
    -webkit-tap-highlight-color: transparent;
    font-weight: 300;
    margin: 0;
    text-decoration: none;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.primaryDark};
  }
 
`

export default GlobalStyles
