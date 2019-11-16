/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyles />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

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
