module.exports = {
  siteMetadata: {
    title: `Ainar's Travels`,
    description: `Insert default general app description here with keywords for SEO. Shows up on default for every page where description is not specified explicitly.`,
    author: `Ainars Ciesa`,
    keywords: `travel,long-term-travel,travel-on-budget,blog,travel blog`,
    logo: `./src/images/gatsby-astronaut.png`,
    siteUrl: `https://localhost:8000`,
    siteLanguage: `en`,
    ogLanguage: `en-US`,
    schemaHeadline: `No bs guide to travel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/content/about`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: "./src/state/createStore",
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "TravelApp",
        short_name: "TravelApp",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    // gatsby-config.js
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
