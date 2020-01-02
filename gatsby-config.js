module.exports = {
  siteMetadata: {
    title: `Bakpaking`,
    description: `Bakpaking is a place to read all about long term backpacking on a budget with no BS or sugarcoating, just straight to the point honest opinions and genuine experiences by Ainars Ciesa`,
    author: `Ainars Ciesa`,
    keywords: `backpacking, long term travel, backpacking on a budget, travel blog, backpacker, nomad`,
    icon: `./src/images/icon.png`,
    iconAlt: `./src/images/icon_inverted.png`,
    siteUrl: `https://cranky-minsky-3ed2f3.netlify.com`,
    siteLanguage: `en`,
    ogLanguage: `en-US`,
    schemaHeadline: `All about long term backpacking on a budget`,
    blogPostPrefix: `/blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/2020`,
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
        name: "Bakpaking",
        short_name: "Bakpaking",
        start_url: "/",
        background_color: "rgb(28, 28, 28)",
        theme_color: "rgb(28, 28, 28)",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
