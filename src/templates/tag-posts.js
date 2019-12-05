import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo/"
import PostListing from "../components/PostListing"
import TagListing from "../components/TagListing"
import { PageHeading } from "../components/elements/PageHeading"
import StickyBackButton from "../components/elements/StickyBackButton"

const TagPosts = ({ data, pageContext }) => {
  const { blogs } = data
  return (
    <>
      <SEO title="Blog | Ainar's Travels" pathname={pageContext.blogLink} />
      <Layout>
        <Link to="/blog">
          <StickyBackButton />
        </Link>

        <TagListing />

        <PageHeading>{pageContext.tag.toUpperCase()}</PageHeading>
        <PostListing postEdges={blogs.edges} pagination={pageContext} />
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