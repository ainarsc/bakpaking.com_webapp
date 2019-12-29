import React from "react"
import { connect } from "react-redux"
import Layout from "../components/Layout"
import SEO from "../components/seo/seo"
import StickyBackButton from "../components/elements/StickyBackButton"

const Success = ({ navigate, prevPage }) => (
  <Layout>
    <SEO title="Success page" />
    <p>Thank you contacting me! I will be in touch with you soon!</p>
    {prevPage && (
      <StickyBackButton fn={() => navigate(prevPage)}>Go back</StickyBackButton>
    )}
  </Layout>
)
const mapState = state => {
  const { location } = state
  return { prevPage: location.prevPage }
}
export default connect(mapState)(Success)
