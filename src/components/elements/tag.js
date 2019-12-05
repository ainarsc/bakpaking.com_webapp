import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  padding: 5px 7px;
  margin: 3px;
  text-align: center;
  background-color: ${props =>
    props.special ? "rgba(169, 245, 237, 0.20)" : props.theme.secondaryDark};
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
// ${({ theme }) => theme.secondaryDark}
const Tag = props => {
  return (
    <Link to={props.tagLink}>
      <Container {...props}>
        <h3>{props.tagName}</h3>
      </Container>
    </Link>
  )
}

export default Tag
