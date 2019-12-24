import React from "react"
import GlobalStyles from "../global"
import PropTypes from "prop-types"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Main from "./Main"
import Backdrop from "./Backdrop"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Backdrop>
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
