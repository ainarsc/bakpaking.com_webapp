import React from "react"
import styled from "styled-components"
import Svg from "./elements/Svg"
import { facebook, linkedin, twitter } from "../assets/Icons"

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

const MediaIcons = ({ link }) => {
  return (
    <Container>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Svg dataPath={facebook.datapath} icon={"facebook"} />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?text=${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Svg dataPath={twitter.datapath} icon={"twitter"} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Svg dataPath={linkedin.datapath} icon={"linkedin"} />
      </a>
    </Container>
  )
}

export default MediaIcons
