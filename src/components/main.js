import React from "react"
import styled from "styled-components"

const MainContainer = styled.main`
  width: 100%;
  max-width: 900px;
  margin: 5rem auto 3rem;
  min-height: calc(100vh - 7rem - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    width: 80%;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    min-height: calc(100vh - 3.5rem - 8rem);
  }
`

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>
}

export default Main
