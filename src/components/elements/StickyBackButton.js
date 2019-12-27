import React from "react"
import styled from "styled-components"
import BackButton from "./BackButton"

//TODO: Replace icon datapath with imported icons
const Container = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    display: inline;
    position: fixed;
    bottom: 3.3rem;
    left: 0;
  }
`

const StickyBackButton = ({ fn, children }) => {
  return (
    <Container>
      <BackButton fn={fn}>{children}</BackButton>
    </Container>
  )
}

export default StickyBackButton
