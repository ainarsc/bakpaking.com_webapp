import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./facebook"
import Twitter from "./twitter"
import SchemaOrg from "./schemaOrg"

const SEO = ({ title, desc, keywords, image, pathname, article, node }) => {
  // Destructure metadata query from config file
  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      defaultTitle,
      defaultDescription,
      defaultKeywords,
      defaultImage,
      siteUrl,
      author,
      siteLanguage,
      ogLanguage,
      headline,
    },
  } = site

  // Set default variables
  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || defaultImage,
    url: `${siteUrl}${pathname || ""}`,
  }

  //////////

  return (
    <>
      {/* General meta tags */}
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <link rel="canonical" href={seo.url} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <SchemaOrg
        isArticle={article}
        url={seo.url}
        title={seo.title}
        image={seo.image}
        description={seo.description}
        datePublished={node.date_published}
        dateModified={node.date_modified}
        author={author}
        buildTime={buildTime}
        lang={siteLanguage}
        headline={headline}
      />
      {/* Social media sharable tags */}
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
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  desc: null,
  keywords: null,
  pathname: null,
  image: null,
  article: false,
  node: { date_published: "2019-11-20", date_modified: "2019-11-20" },
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        defaultImage: iconAlt
        author
        siteLanguage
        ogLanguage
        headline: schemaHeadline
      }
    }
  }
`
