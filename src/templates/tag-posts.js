import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/blog-card"
import { H1 } from "../components/elements/H1"
import SEO from "../components/seo/"
import PageLinks from "../components/page-links"
import Tag from "../components/elements/tag"
import TagContainer from "../components/tag-container"

const TagPosts = ({ data, pageContext }) => {
  let { blogs } = data
  const { edges } = blogs
  let { tags } = data
  const { tag } = pageContext
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
        <H1>{tag.toUpperCase()}</H1>
        {edges.map(({ node }) => (
          <BlogCard
            key={node.id}
            title={node.frontmatter.title}
            intro={node.excerpt}
            link={blogURL + node.frontmatter.path}
            thumbnail={node.frontmatter.featuredImg.childImageSharp.fluid}
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

//($skip: Int!, $limit: Int!)
//
//

export const query = graphql`
  query($skip: Int!, $limit: Int!, $tag: String!) {
    tags: allMarkdownRemark {
      group(field: frontmatter___tagsArr) {
        fieldValue
      }
    }
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
                  src
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
