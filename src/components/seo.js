import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./seo/facebook"
import Twitter from "./seo/twitter"

const SEO = ({ title, desc, keywords, banner, pathname, article }) => {
  // Destructure metadata query from config file
  const { site } = useStaticQuery(query)
  const {
    siteMetadata: {
      defaultTitle,
      defaultDescription,
      defaultKeywords,
      defaultImage,
      siteUrl,
      author,
      appLanguage,
      ogLanguage,
    },
  } = site

  // Set default variables
  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: banner || defaultImage,
    url: `${siteUrl}${pathname || ""}`,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={appLanguage} />
        <link rel="canonical" href={seo.url} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        url={seo.url}
        type={article ? "article" : "website"}
        locale={ogLanguage}
        name="FOO"
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username="FOO"
      />
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  keywords: PropTypes.string,
  pathname: PropTypes.string,
  banner: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  desc: null,
  keywords: null,
  pathname: null,
  banner: null,
  article: false,
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
        defaultImage: image
        author
        appLanguage
        ogLanguage
      }
    }
  }
`
