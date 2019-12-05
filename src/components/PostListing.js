import React from "react"
import BlogCard from "../components/BlogCard"
import PageLinks from "../components/PageLinks"
import PropTypes from "prop-types"

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

PostListing.propTypes = {
  pagination: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
    blogLink: PropTypes.string,
  }),
  postEdges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      excerpt: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
        featuredImg: PropTypes.string,
      }),
    })
  ),
}

export default PostListing
