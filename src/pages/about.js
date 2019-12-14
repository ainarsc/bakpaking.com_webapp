import React from "react"
import Header from "../components/Header"
import Article from "../components/elements/Article"
import Layout from "../components/Layout"
import SEO from "../components/seo/"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <SEO title="About Me | Ainar's Travels" pathname="/about" />
      <Layout>
        <Header
          imagePath={frontmatter.featuredImg.childImageSharp.fluid}
          isTrue={false}
        >
          {frontmatter.title}
        </Header>
        <Article dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        title
        featuredImg {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
