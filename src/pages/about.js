import React from "react"
import Header from "../components/Header"
import Article from "../components/elements/Article"
import Layout from "../components/Layout"
import SEO from "../components/seo/"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = data.site.siteMetadata

  return (
    <>
      <SEO title={`About Me | ${title}`} pathname="/about" />
      <Layout>
        <Header
          imagePath={frontmatter.featuredImg.childImageSharp.fluid}
          isTrue={false}
          imgDesc={frontmatter.imgDesc}
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
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        title
        imgDesc
        featuredImg {
          childImageSharp {
            fluid(quality: 80, maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
