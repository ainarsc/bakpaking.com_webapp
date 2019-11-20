import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, desc, keywords, pathname, article, buildTime, node }) => {
  const { site } = useStaticQuery(query)

  const {
    siteMetadata: {
      defaultTitle,
      defaultDescription,
      defaultKeywords,
      author,
      siteUrl,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    keywords: keywords || defaultKeywords,
    url: `${siteUrl}${pathname || ""}`,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang="en" />
        <link rel="canonical" href={seo.url} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={author} />
      </Helmet>
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
  keywords: PropTypes.string,
  pathname: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  desc: null,
  keywords: null,
  pathname: null,
  article: false,
  node: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl: url
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        author
      }
    }
  }
`
