import React from "react"
import GlobalStyles from "../global"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar"
import Footer from "./footer"
import Main from "./main"
import Backdrop from "./backdrop"
import MediaIcons from "./media-icons"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Backdrop>
        <MediaIcons />
        <Main>{children}</Main>
        <Footer />
      </Backdrop>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
