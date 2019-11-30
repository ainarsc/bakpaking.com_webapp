import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 5px 7px;
  margin: 3px;
  text-align: center;
  background-color: ${({ theme }) => theme.secondaryDark};
  border-radius: 2px;
  cursor: pointer;
  h3 {
    color: ${({ theme }) => theme.secondaryLighter};
    :hover {
      color: #14a76c;
      transition: ease-in-out 0.3s;
    }
  }
`

const Tag = ({ tagName }) => {
  return (
    <Container>
      <h3>{tagName}</h3>
    </Container>
  )
}

export default Tag
