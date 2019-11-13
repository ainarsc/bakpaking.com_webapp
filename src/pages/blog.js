import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card"
import SearchBar from "../components/search-bar"
import image from "../images/tb3.jpg"
import { H1 } from "../components/elements/H1"

//Temp variables
const post = "/post"

//TODO:
// Component that fetches post given certain tag or criteria

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <SearchBar />
      <H1>LATEST BLOG POSTS</H1>
      {edges.map(({ node }) => (
        <BlogCard
          key={node.id}
          title={node.frontmatter.title}
          intro={node.excerpt}
          link={post}
          thumbnail={image}
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
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
