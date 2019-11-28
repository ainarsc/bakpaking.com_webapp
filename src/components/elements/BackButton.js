import React from "react"
import styled from "styled-components"

const Container = styled.button`
  margin-top: 1.2rem;
  display: flex;
  font-size: 1.3rem;
  width: 4rem;
  padding: 5px;
  color: ${({ theme }) => theme.secondaryLighter};
  border: none;
  border-radius: 2px;
  text-justify: center;
  background-color: #242424;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: #14a76c;
    transition: 0.25s;
  }
`

const BackButton = () => {
  return <Container onClick={() => window.history.back()}>&#11152;</Container>
}

export default BackButton
