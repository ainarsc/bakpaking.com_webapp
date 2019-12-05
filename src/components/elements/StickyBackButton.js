import React from "react"
import styled from "styled-components"
import BackButton from "./BackButton"

//TODO: Replace icon datapath with imported icons
const Container = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    display: inline;
    position: fixed;
    bottom: 3rem;
    left: 0;
  }
`

const MediaIcons = ({ fn }) => {
  return (
    <Container>
      <BackButton fn={fn} />
    </Container>
  )
}

export default MediaIcons
