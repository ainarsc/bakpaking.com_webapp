import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *{
    box-sizing: border-box;
    font-family: 'raleway', sans-serif; 
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.primaryLight};
    margin: 0;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.primaryDark};
    
  }
 
`

export default GlobalStyles
