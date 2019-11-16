const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  try {
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)
    const { edges } = result.data.allMarkdownRemark
    edges.forEach(({ node }) => {
      const postPath = node.frontmatter.path
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
