import React from "react"
import Tag from "./elements/Tag"
import TagContainer from "./TagContainer"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

const TagListing = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          blogPostPrefix
        }
      }
      tags: allMarkdownRemark {
        group(field: frontmatter___tagsArr) {
          fieldValue
        }
      }
    }
  `)
  const { blogPostPrefix } = data.site.siteMetadata

  return (
    <Location>
      {({ location }) => (
        <TagContainer>
          {location.pathname.includes("categories") && (
            <Tag tagName="All Posts" tagLink={blogPostPrefix} special />
          )}
          {data.tags.group.map((tag, i) => (
            <Tag
              key={`tag-nr-${i}`}
              tagName={tag.fieldValue}
              tagLink={`${blogPostPrefix}/categories/${tag.fieldValue.replace(
                / /g,
                "-"
              )}`}
            />
          ))}
        </TagContainer>
      )}
    </Location>
  )
}

export default TagListing
