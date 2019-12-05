import React from "react"
import Tag from "./elements/tag"
import TagContainer from "./tag-container"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

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
    <Location>
      {({ location }) => (
        <TagContainer>
          {location.pathname !== "/blog" && (
            <Tag tagName="All Posts" tagLink="/blog" special />
          )}
          {data.tags.group.map((tag, i) => (
            <Tag
              key={`tag-nr-${i}`}
              tagName={tag.fieldValue}
              tagLink={`${tagLink}${tag.fieldValue.toLowerCase()}`}
            />
          ))}
        </TagContainer>
      )}
    </Location>
  )
}

export default TagListing
