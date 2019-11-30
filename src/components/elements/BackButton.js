import React from "react"
import styled from "styled-components"
import Svg from "./Svg"
import { arrowLeft } from "../../assets/Icons"

const Container = styled.button`
  margin-top: 0.8rem;
  display: flex;
  padding: 5px;
  width: 4.5rem;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.secondaryDark};
  justify-content: center;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  :hover svg {
    transition: ease-in-out 0.2s;
    fill: #14a76c;
  }
  svg {
    fill: ${({ theme }) => theme.secondaryLighter};
    height: 1.5rem;
  }
`

const BackButton = () => {
  return (
    <Container onClick={() => window.history.back()}>
      <Svg
        small
        data-icon={"arrow-left"}
        dataPath={arrowLeft.datapath}
        icon={"email"}
      />
    </Container>
  )
}

export default BackButton
