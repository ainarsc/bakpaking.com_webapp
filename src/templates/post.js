import React from "react"
import Header from "../components/blog-header"
import Article from "../components/elements/Article"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackButton from "../components/elements/BackButton"

const Post = ({ data }) => {
  let { markdownRemark } = data
  let { frontmatter, html } = markdownRemark
  const postPath = "/blog"

  return (
    <>
      <SEO
        title={frontmatter.title}
        pathname={postPath + frontmatter.path}
        desc={markdownRemark.excerpt}
        keywords={frontmatter.tags}
        article={true}
        image={frontmatter.featuredImg.childImageSharp.fluid.src}
      />
      <Layout>
        <Header
          imagePath={frontmatter.featuredImg.childImageSharp.fluid}
          isTrue={true}
          date={frontmatter.date}
        >
          {frontmatter.title}
        </Header>
        <Article dangerouslySetInnerHTML={{ __html: html }} />
        <BackButton />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      excerpt(pruneLength: 200)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        featuredImg {
          childImageSharp {
            fluid(quality: 75) {
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
