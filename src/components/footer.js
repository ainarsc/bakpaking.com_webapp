import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Svg from "./elements/Svg"
import { Icons as mediaIcons } from "../assets/Icons"

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
  return (
    <Container>
      <Copyright>
        <p>&copy; 2019</p>
      </Copyright>
      <Icons>
        <Svg small dataPath={mediaIcons.facebook.datapath} icon={"facebook"} />
        <Svg
          small
          dataPath={mediaIcons.instagram.datapath}
          icon={"instagram"}
        />
        <Svg small dataPath={mediaIcons.linkedin.datapath} icon={"linkedin"} />
        <Svg small dataPath={mediaIcons.email.datapath} icon={"email"} />
      </Icons>
      <Developed>
        <p>Developed by Ainars Ciesa</p>
      </Developed>
    </Container>
  )
}

Footer.propTypes = {
  location: PropTypes.string,
}

export default Footer
