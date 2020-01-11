import React from "react"
import Header from "../components/Header"
import Article from "../components/elements/Article"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import StickyBackButton from "../components/elements/StickyBackButton"

const Post = ({ data }) => {
  let { markdownRemark } = data
  let { frontmatter, html } = markdownRemark
  const { blogPostPrefix } = data.site.siteMetadata

  return (
    <>
      <SEO
        title={frontmatter.title}
        pathname={blogPostPrefix + frontmatter.path}
        desc={markdownRemark.excerpt}
        keywords={frontmatter.keywords}
        article={true}
        image={frontmatter.featuredImg.childImageSharp.fluid.src}
      />
      <Layout>
        <Header
          imagePath={frontmatter.featuredImg.childImageSharp.fluid}
          isPost={true}
          date={frontmatter.date}
          imgDesc={frontmatter.imgDesc}
        >
          {frontmatter.title}
        </Header>
        <Article dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/blog">
          <StickyBackButton>All Posts</StickyBackButton>
        </Link>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($postPath: String!) {
    site {
      siteMetadata {
        blogPostPrefix
        icon
        siteUrl
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
        imgDesc
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
