import React from "react"
import styled from "styled-components"
import Svg from "./Svg"
import { arrowLeft } from "../../assets/Icons"

const Button = styled.button`
  margin: 0.8rem 0;
  display: flex;
  padding: 0 2px;
  width: 2.7rem;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.secondaryDark};
  justify-content: center;
  vertical-align: center;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.secondaryLighter};
  }
  p {
    display: none;
  }
  :focus {
    outline: 0;
  }
  :hover svg {
    transition: ease-in-out 0.2s;
    fill: #14a76c;
  }
  @media only screen and (${({ theme }) => theme.laptopS}) {
    padding: 6px 2px;
    width: 5rem;
    svg {
      display: none;
    }
    p {
      display: inherit;
      color: ${({ theme }) => theme.secondaryLighter};
    }
    :hover p {
      transition: ease-in-out 0.2s;
      color: #14a76c;
    }
  }
`

const BackButton = ({ fn, children }) => {
  return (
    <Button onClick={fn}>
      <Svg
        data-icon={"long-arrow-left"}
        dataPath={arrowLeft.datapath}
        icon={"email"}
      />
      <p>{children}</p>
    </Button>
  )
}
BackButton.defaultProps = { fn: null }

export default BackButton
