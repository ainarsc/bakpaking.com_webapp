import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./elements/Facebook"
import Linkedin from "./elements/Linkedin"
import Twitter from "./elements/Twitter"
import Instagram from "./elements/Instagram"
import { Location } from "@reach/router"
import { pushPage } from "../state/actions/locationActions"

const Container = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    display: inline;
    position: fixed;
    top: 35vh;
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

const MediaIcons = ({ pushPage, prevPage }) => {
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
        </Container>
      )}
    </Location>
  )
}

const mapState = state => {
  const { location } = state
  return { prevPage: location.prevPage }
}
const mapDispatch = {
  pushPage,
}
export default connect(mapState, mapDispatch)(MediaIcons)
