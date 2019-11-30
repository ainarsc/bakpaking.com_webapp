import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 200px;
  max-width: 700px;
  align-items: center;
`

const TagContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default TagContainer
