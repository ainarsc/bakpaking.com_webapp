import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card"
import SearchBar from "../components/search-bar"
// import image from "../images/tb3.jpg"
import { H1 } from "../components/elements/H1"

//TODO:
// Component that fetches post given certain tag or criteria

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const blogURL = "/blog"

  return (
    <Layout>
      <SearchBar />
      <H1>LATEST BLOG POSTS</H1>
      {edges.map(({ node }) => (
        <BlogCard
          key={node.id}
          title={node.frontmatter.title}
          intro={node.excerpt}
          link={blogURL + node.frontmatter.path}
          thumbnail={node.frontmatter.featuredImg.childImageSharp.fluid}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImg {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
