import React from "react"
import Tag from "./elements/tag"
import TagContainer from "./tag-container"
import { useStaticQuery, graphql } from "gatsby"

const TagListing = () => {
  const tagLink = "/blog/categories/"
  const data = useStaticQuery(graphql`
    query {
      tags: allMarkdownRemark {
        group(field: frontmatter___tagsArr) {
          fieldValue
        }
      }
    }
  `)
  return (
    <>
      <TagContainer>
        {data.tags.group.map((tag, i) => (
          <Tag
            key={`tag-nr-${i}`}
            tagName={tag.fieldValue}
            tagLink={`${tagLink}${tag.fieldValue.toLowerCase()}`}
          />
        ))}
      </TagContainer>
    </>
  )
}

export default TagListing
