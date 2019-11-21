import React from "react"
import Helmet from "react-helmet"

export default React.memo(
  ({
    author,
    datePublished,
    dateModified,
    description,
    image,
    isArticle,
    title,
    url,
    buildTime,
    lang,
    headline,
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url: url,
        headline,
        inLanguage: lang,
        mainEntityOfPage: url,
        description: description,
        name: title,
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
          url: image,
        },
      },
    ]

    const schema = isArticle
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
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
                url: image,
              },
            },
            datePublished: datePublished,
            dateModified: dateModified,
            description: description,
            headline: title,
            inLanguage: lang,
            url: url,
            name: title,
            image: {
              "@type": "ImageObject",
              url: image,
            },
            mainEntityOfPage: url,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
