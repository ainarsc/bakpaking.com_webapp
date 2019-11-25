require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

setTimeout(() => {
  console.log("[gatsby-node]: Running in " + process.env.NODE_ENV)
}, 3000)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  try {
    // const result = await graphql(`
    //   query {
    //     allMarkdownRemark {
    //       edges {
    //         node {
    //           frontmatter {
    //             path
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
    const result = await graphql(`
      query {
        allFile(
          filter: {
            sourceInstanceName: { eq: "posts" }
            extension: { eq: "md" }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      }
    `)
    const { edges } = result.data.allFile
    edges.forEach(({ node }) => {
      const postPath = node.childMarkdownRemark.frontmatter.path
      createPage({
        path: `/blog${postPath}`,
        component: require.resolve(`./src/templates/post.js`),
        context: { postPath: postPath },
      })
    })
  } catch (err) {
    console.log("[gatsby-node]: --- " + err)
  }
}
