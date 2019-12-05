import React from "react"
import styled from "styled-components"
import Svg from "./elements/Svg"
import { Icons } from "../assets/Icons"

//TODO: Replace icon datapath with imported icons
const Container = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    display: inline;
    position: fixed;
    top: 40vh;
    left: 5px;
    width: 3rem;
    cursor: pointer;

    svg:hover {
      fill: #14a76c;
      transition: ease-in-out 0.3s;
    }
    @media only screen and (${({ theme }) => theme.laptopS}) {
      svg {
        height: 3rem;
        width: 3.5rem;
      }
    }
  }
`

const MediaIcons = () => {
  return (
    <Container>
      <Svg dataPath={Icons.facebook.datapath} icon={"facebook"} />
      <Svg dataPath={Icons.twitter.datapath} icon={"twitter"} />
      <Svg dataPath={Icons.linkedin.datapath} icon={"linkedin"} />
    </Container>
  )
}

export default MediaIcons
