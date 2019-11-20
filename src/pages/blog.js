import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card"
import SearchBar from "../components/search-bar"
import { H1 } from "../components/elements/H1"
import SEO from "../components/seo"

//TODO:
// Component that fetches post given certain tag or criteria

const Blog = ({ data }) => {
  let { allFile } = data
  let { edges } = allFile

  const blogURL = "/blog"

  return (
    <>
      <SEO title="Blog | Ainar's Travels" pathname={blogURL} />
      <Layout>
        <SearchBar />
        <H1>LATEST BLOG POSTS</H1>
        {edges.map(({ node }) => (
          <BlogCard
            key={node.childMarkdownRemark.id}
            title={node.childMarkdownRemark.frontmatter.title}
            intro={node.childMarkdownRemark.excerpt}
            link={blogURL + node.childMarkdownRemark.frontmatter.path}
            thumbnail={
              node.childMarkdownRemark.frontmatter.featuredImg.childImageSharp
                .fluid
            }
          />
        ))}
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
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
  }
`

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             date(formatString: "DD MMMM, YYYY")
//             featuredImg {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           excerpt(pruneLength: 300)
//         }
//       }
//     }
//   }
// `

export default Blog
