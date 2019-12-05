import React from "react"
import styled from "styled-components"
import Svg from "./Svg"
import { arrowLeft } from "../../assets/Icons"

const Container = styled.button`
  margin: 0.8rem 0;
  display: flex;
  padding: 3px;
  width: 3rem;
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
  }
`

const BackButton = ({ fn }) => {
  return (
    <Container onClick={fn}>
      <Svg
        small
        data-icon={"arrow-left"}
        dataPath={arrowLeft.datapath}
        icon={"email"}
      />
    </Container>
  )
}
BackButton.defaultProps = { fn: null }

export default BackButton
