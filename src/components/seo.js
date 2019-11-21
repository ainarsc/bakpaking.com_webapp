import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./seo/facebook"
import Twitter from "./seo/twitter"

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

  //Website schema
  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      "@type": "Person",
      name: author,
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
    },
    copyrightYear: "2019",
    creator: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Person",
      name: author,
    },
    datePublished: "2019-01-18T10:30:00+01:00",
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${defaultImage}`,
    },
  }

  // Initial breadcrumb list
  const itemListElement = [
    {
      "@type": "ListItem",
      item: {
        "@id": siteUrl,
        name: "Homepage",
      },
      position: 1,
    },
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: author,
      },
      copyrightHolder: {
        "@type": "Person",
        name: author,
      },
      copyrightYear: "2019",
      creator: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: author,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}${defaultImage}`,
        },
      },
      datePublished: node.date_published,
      dateModified: node.date_modified,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
    // Push current blog post into breadcrumb list
    itemListElement.push({
      "@type": "ListItem",
      item: {
        "@id": seo.url,
        name: seo.title,
      },
      position: 2,
    })
  }

  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    name: "Breadcrumbs",
    itemListElement,
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
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
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
        siteUrl: url
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        defaultImage: logo
        author
        siteLanguage
        ogLanguage
        headline: schemaHeadline
      }
    }
  }
`
