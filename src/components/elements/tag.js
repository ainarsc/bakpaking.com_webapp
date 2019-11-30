import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  padding: 5px 7px;
  margin: 3px;
  text-align: center;
  background-color: ${({ theme }) => theme.secondaryDark};
  border-radius: 2px;
  cursor: pointer;
  h3 {
    color: ${({ theme }) => theme.secondaryLighter};
  }
  :hover h3 {
    color: #14a76c;
    transition: ease-in-out 0.3s;
  }
`

const Tag = ({ tagName, tagLink }) => {
  return (
    <Link to={tagLink}>
      <Container>
        <h3>{tagName}</h3>
      </Container>
    </Link>
  )
}

export default Tag
