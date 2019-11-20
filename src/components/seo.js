import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, desc, author, lang }) {
  //Query the config file
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            url
          }
        }
      }
    `
  )

  //Set variable
  const title = title || site.siteMetadata.title
  const description = desc || site.siteMetadata.description
  const keywords = site.siteMetadata.keywords.join(",")
  const url = site.siteMetadata.url
  const author = site.siteMetadata.author
  const image = null

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang: lang,
        }}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      >
        {/* General meta tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />
        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="NO CREATOR FOUND" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </Fragment>
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  author: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
