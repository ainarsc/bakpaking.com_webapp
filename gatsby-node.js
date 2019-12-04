// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogListing = path.resolve("./src/templates/blog-page.js")
  const postPage = path.resolve(`./src/templates/post.js`)
  const BLOG = "/blog"

  try {
    const result = await graphql(`
      query {
        tags: allMarkdownRemark {
          group(field: frontmatter___tagsArr) {
            fieldValue
            totalCount
          }
        }
        posts: allFile(
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

    // CREATE BLOG PAGES
    const { edges } = result.data.posts
    const { tags } = result.data
    const postsPerPage = 10
    const numPages = Math.ceil(edges.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-page.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          blogLink: BLOG,
        },
      })
    })

    // CREATE BLOG POSTS
    edges.forEach(({ node }) => {
      const postPath = node.childMarkdownRemark.frontmatter.path
      createPage({
        path: `/blog${postPath}`,
        component: path.resolve(`./src/templates/post.js`),
        context: { postPath: postPath },
      })
    })

    // CREATE TAG POST PAGES
    let numTagPages
    //TODO, skip
    tags.group.forEach(tag => {
      const tagName = tag.fieldValue
      numTagPages = Math.ceil(tag.totalCount / postsPerPage) //Round Up

      createPage({
        path: `/blog/categories/${tagName.toLowerCase()}`,
        component: path.resolve(`./src/templates/tag-posts.js`),
        context: {
          tag: tagName,
          limit: postsPerPage,
          skip: 0,
          numPages: numTagPages,
          currentPage: i + 1,
          blogLink: BLOG,
        },
      })
    })
  } catch (err) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    console.log("[gatsby-node]: --- " + err)
  }
}
