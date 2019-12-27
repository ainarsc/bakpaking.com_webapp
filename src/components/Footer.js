import React from "react"
import styled from "styled-components"
import Svg from "./elements/Svg"
import Facebook from "./elements/Facebook"
import Linkedin from "./elements/Linkedin"
import Twitter from "./elements/Twitter"
import Instagram from "./elements/Instagram"
import Email from "./elements/Email"
import { Location } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { email } from "../assets/Icons"

const Container = styled.footer`
  padding: 0.5rem;
  height: 7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.footerMain};
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 99;
  font-size: 0.5rem;
  font-weight: lighter;
  @media only screen and (${({ theme }) => theme.tablet}) {
    height: 3.5rem;
    flex-direction: row;
    padding: 1rem;
  }
`

const Copyright = styled.div`
  width: 30%;
  text-align: center;
  @media only screen and (${({ theme }) => theme.tablet}) {
    text-align: left;
  }
`
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  svg:hover {
    transition: ease-in-out 0.2s;
    fill: #14a76c;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    width: 40%;
  }
`
const Developed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
  @media only screen and (${({ theme }) => theme.tablet}) {
    text-align: auto;
    width: 30%;
  }
`

const Footer = () => {
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
          <Copyright>
            <span>© {new Date().getFullYear()}</span>
          </Copyright>
          <Icons>
            <Facebook small link={siteUrl + location.pathname} />
            <Twitter small link={siteUrl + location.pathname} />
            <Linkedin small link={siteUrl + location.pathname} />
            <Instagram small />
            <Email small />
          </Icons>
          <Developed>
            <p>Developed by Ainars Ciesa</p>
          </Developed>
        </Container>
      )}
    </Location>
  )
}

export default Footer
