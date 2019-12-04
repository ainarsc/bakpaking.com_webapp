import React from "react"
import BlogCard from "../components/blog-card"
import PageLinks from "../components/page-links"

const PostListing = ({ postEdges, pagination }) => {
  return (
    <>
      {postEdges.map(({ node }) => (
        <BlogCard
          key={node.id}
          title={node.frontmatter.title}
          intro={node.excerpt}
          link={pagination.blogLink + node.frontmatter.path}
          thumbnail={node.frontmatter.featuredImg.childImageSharp.fluid}
        />
      ))}
      <PageLinks pagination={pagination} />
      {/* {!pagination.numPages < 2 &&} */}
    </>
  )
}

export default PostListing
