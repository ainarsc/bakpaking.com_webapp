import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 3px;
  margin: 3px;
  text-align: center;
  background-color: ${({ current }) => current};
`

const Tag = ({ tagName, postCount }) => {
  return (
    <Container>
      <h3>
        {tagName} {postCount}
      </h3>
    </Container>
  )
}

export default Tag
