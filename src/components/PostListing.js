import React from "react"
import BlogCard from "../components/BlogCard"
import PageLinks from "../components/PageLinks"

const PostListing = ({ postEdges, pagination }) => {
  return (
    <>
      {postEdges.map(({ node }) => (
        <BlogCard
          key={node.id}
          title={node.frontmatter.title}
          intro={node.excerpt}
          link={"/blog" + node.frontmatter.path}
          thumbnail={node.frontmatter.featuredImg.childImageSharp.fluid}
        />
      ))}

      {pagination.numPages > 1 && <PageLinks pagination={pagination} />}
    </>
  )
}

export default PostListing
