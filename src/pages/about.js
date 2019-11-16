import React from "react"
import Header from "../components/blog-header"
import Article from "../components/elements/Article"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Header
        imagePath={frontmatter.featuredImg.childImageSharp.fluid}
        isTrue={false}
      >
        {frontmatter.title}
      </Header>
      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
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
            fluid(quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
