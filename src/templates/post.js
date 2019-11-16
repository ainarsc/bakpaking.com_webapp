import React from "react"
import Header from "../components/blog-header"
import Article from "../components/elements/Article"
import { graphql } from "gatsby"
// import image from "../images/tb3.jpg"
import Layout from "../components/layout"

const Post = ({ data }) => {
  let { markdownRemark } = data
  let { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Header
        imagePath={frontmatter.featuredImg.childImageSharp.fluid}
        isTrue={true}
        date={frontmatter.date}
      >
        {frontmatter.title}
      </Header>
      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
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

export default Post
