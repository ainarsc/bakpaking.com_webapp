import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo/"
import PostListing from "../components/PostListing"
import TagListing from "../components/TagListing"
import { PageHeading } from "../components/elements/PageHeading"

const BlogPage = ({ data, pageContext }) => {
  const { blogs } = data

  return (
    <>
      <SEO title="Blog | Ainar's Travels" pathname={pageContext.blogLink} />
      <Layout>
        <TagListing />
        <PageHeading>{"Latest From Blog"}</PageHeading>
        <PostListing postEdges={blogs.edges} pagination={pageContext} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    blogs: allMarkdownRemark(
      sort: { fields: frontmatter___date }
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
            featuredImg {
              childImageSharp {
                fluid {
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
