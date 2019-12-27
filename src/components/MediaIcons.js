import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./elements/Facebook"
import Linkedin from "./elements/Linkedin"
import Twitter from "./elements/Twitter"
import Instagram from "./elements/Instagram"
import Email from "./elements/Email"
import { Location } from "@reach/router"

const Container = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    display: inline;
    position: fixed;
    top: 30vh;
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
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const { siteUrl } = data.site.siteMetadata
  return (
    <Location>
      {({ location }) => (
        <Container>
          <Facebook link={siteUrl + location.pathname} />
          <Twitter link={siteUrl + location.pathname} />
          <Linkedin link={siteUrl + location.pathname} />
          <Instagram />
          <Email />
        </Container>
      )}
    </Location>
  )
}

export default MediaIcons
