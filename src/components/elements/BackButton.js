import React from "react"
import styled from "styled-components"
import Svg from "./Svg"
import { arrowLeft } from "../../assets/Icons"

const Container = styled.button`
  margin-top: 1.2rem;
  display: flex;
  padding: 5px;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.secondaryDark};
  justify-content: center;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  svg {
    fill: ${({ theme }) => theme.secondaryLighter};
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
