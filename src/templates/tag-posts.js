import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo/"
import PostListing from "../components/PostListing"
import TagListing from "../components/TagListing"
import { PageHeading } from "../components/elements/PageHeading"

const TagPosts = ({ data, pageContext }) => {
  const { blogs } = data
  const { tag } = pageContext
  const { numPages, currentPage } = pageContext
  const blogURL = pageContext.pathName

  return (
    <>
      <SEO title="Blog | Ainar's Travels" pathname={blogURL} />
      <Layout>
        <TagListing />
        <PageHeading>{tag.toUpperCase()}</PageHeading>
        <PostListing
          postEdges={blogs.edges}
          numPages={numPages}
          currentPage={currentPage}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!, $tag: String!) {
    blogs: allMarkdownRemark(
      sort: { fields: frontmatter___date }
      filter: { frontmatter: { tagsArr: { in: [$tag] } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            path
            tagsArr
            date(formatString: "DD MMMM, YYYY")
            title
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

export default TagPosts
