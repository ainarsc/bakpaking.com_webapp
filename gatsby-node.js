const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const endpoint = createFilePath({ node, getNode, basePath: "pages" })

//     createNodeField({
//       node,
//       name: `slug`,
//       value: `/blog${endpoint}`,
//     })
//   }
// }

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
        path: `/blog/posts${postPath}`,
        component: require.resolve(`./src/templates/post.js`),
        context: { postPath: postPath },
      })
    })
  } catch (err) {
    console.log("[gatsby-node]: --- " + err)
  }
}
