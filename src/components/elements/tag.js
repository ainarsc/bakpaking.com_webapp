import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 5px 7px;
  margin: 3px;
  text-align: center;
  background-color: ${({ theme }) => theme.secondaryDark};
  border-radius: 2px;
  h3 {
    color: ${({ theme }) => theme.secondaryLighter};
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
