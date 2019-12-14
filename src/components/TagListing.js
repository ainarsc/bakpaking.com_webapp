import React from "react"
import Tag from "./elements/Tag"
import TagContainer from "./TagContainer"
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
          {location.pathname.includes("categories") && (
            <Tag tagName="All Posts" tagLink="/blog" special />
          )}
          {data.tags.group.map((tag, i) => (
            <Tag
              key={`tag-nr-${i}`}
              tagName={tag.fieldValue.toLowerCase().replace(/-/g, " ")}
              tagLink={`${tagLink}${tag.fieldValue.toLowerCase()}`}
            />
          ))}
        </TagContainer>
      )}
    </Location>
  )
}

export default TagListing
