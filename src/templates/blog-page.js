import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo/"
import PostListing from "../components/PostListing"
import TagListing from "../components/TagListing"
import { PageHeading } from "../components/elements/PageHeading"

const BlogPage = ({ data, pageContext }) => {
  const { blogs } = data
  const { title, blogPostPrefix } = data.site.siteMetadata

  return (
    <>
      <SEO title={`Blog | ${title}`} pathname={blogPostPrefix} />
      <Layout>
        <TagListing />
        <PageHeading>{"All Posts"}</PageHeading>
        <PostListing postEdges={blogs.edges} pagination={pageContext} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        siteUrl
        blogPostPrefix
      }
    }
    blogs: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            path
            published
            title
            date(formatString: "DD MMMM, YYYY")
            imgDesc
            featuredImg {
              childImageSharp {
                fluid(maxWidth: 400, quality: 45) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 300)
          id
        }
      }
    }
  }
`

export default BlogPage
