import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card"
import { H1 } from "../components/elements/H1"
import SEO from "../components/seo/"
import PageLinks from "../components/page-links"
import Tag from "../components/elements/tag"
import TagContainer from "../components/tag-container"

const BlogPage = ({ data, pageContext }) => {
  let { blogs } = data
  let { tags } = data
  let { edges } = blogs
  const { numPages, currentPage } = pageContext
  const blogURL = pageContext.pathName
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? blogURL
      : blogURL + "/" + (currentPage - 1).toString()
  const nextPage = blogURL + "/" + (currentPage + 1).toString()

  const tagLink = blogURL + "/categories/"

  return (
    <>
      <SEO title="Blog | Ainar's Travels" pathname={blogURL} />
      <Layout>
        <TagContainer>
          {tags.group.map(tag => (
            <Tag
              tagName={tag.fieldValue}
              tagLink={`${tagLink}${tag.fieldValue.toLowerCase()}`}
            />
          ))}
        </TagContainer>

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
        <PageLinks
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          numPages={numPages}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    tags: allMarkdownRemark {
      group(field: frontmatter___tagsArr) {
        fieldValue
      }
    }
    blogs: allFile(
      sort: { fields: childMarkdownRemark___frontmatter___date }
      filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
      limit: $limit
      skip: $skip
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

export default BlogPage
