import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *{
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.primaryLight};
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
