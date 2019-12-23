import React from "react"
import Header from "../components/Header"
import Article from "../components/elements/Article"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import StickyBackButton from "../components/elements/StickyBackButton"

const Post = ({ data }) => {
  let { markdownRemark } = data
  let { frontmatter, html } = markdownRemark
  const { blogPostPrefix, logo } = data.site.siteMetadata

  return (
    <>
      <SEO
        title={frontmatter.title}
        pathname={blogPostPrefix + frontmatter.path}
        desc={markdownRemark.excerpt}
        keywords={frontmatter.keywords}
        article={true}
        image={logo}
      />
      <Layout>
        <Header
          imagePath={frontmatter.featuredImg.childImageSharp.fluid}
          isPost={true}
          date={frontmatter.date}
        >
          {frontmatter.title}
        </Header>
        <Article dangerouslySetInnerHTML={{ __html: html }} />
        <StickyBackButton fn={() => window.history.back()} />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($postPath: String!) {
    site {
      siteMetadata {
        blogPostPrefix
        logo
      }
    }
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      excerpt(pruneLength: 200)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        keywords
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 500, quality: 50) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`

export default Post
