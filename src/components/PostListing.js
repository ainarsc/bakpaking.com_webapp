import React from "react"
import BlogCard from "../components/blog-card"
import PageLinks from "../components/page-links"

const PostListing = ({ postEdges, numPages, currentPage }) => {
  const blogURL = "/blog"
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? blogURL
      : blogURL + "/" + (currentPage - 1).toString()
  const nextPage = blogURL + "/" + (currentPage + 1).toString()

  return (
    <>
      {postEdges.map(({ node }) => (
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
    </>
  )
}

export default PostListing
