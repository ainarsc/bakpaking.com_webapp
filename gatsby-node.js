// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  try {
    const { createPage } = actions
    const blogPage = path.resolve("./src/templates/blog-page.js")
    const postPage = path.resolve(`./src/templates/post.js`)
    const tagPosts = path.resolve(`./src/templates/tag-posts.js`)

    const result = await graphql(`
      query {
        site {
          siteMetadata {
            blogPostPrefix
          }
        }
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
    const { blogPostPrefix } = result.data.site.siteMetadata
    const postsPerPage = 10
    const numPages = Math.ceil(edges.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      const path = i === 0 ? blogPostPrefix : blogPostPrefix + `/${i + 1}`
      createPage({
        path: path,
        component: blogPage,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          blogPrefix: blogPostPrefix,
        },
      })
    })

    // CREATE BLOG POSTS
    edges.forEach(({ node }) => {
      const postPath = node.childMarkdownRemark.frontmatter.path
      createPage({
        path: `${blogPostPrefix}${postPath}`,
        component: postPage,
        context: { postPath: postPath }, //for graphql query
      })
    })

    // CREATE TAG POST PAGES
    tags.group.forEach(tag => {
      // Tag name
      const tagName = tag.fieldValue
      // Number of pages for the tag rounded up
      const numTagPages = Math.ceil(tag.totalCount / postsPerPage)
      // Tag page url
      let tagUrl = `${blogPostPrefix}/categories/${tagName
        .toLowerCase()
        .replace(/ /g, "-")}`

      for (i = 0; i < numTagPages; i++) {
        const currPage = i + 1
        if (numTagPages > 1 && i > 0) {
          tagUrl = tagUrl + `/${currPage}`
        }

        createPage({
          path: tagUrl,
          component: tagPosts,
          context: {
            tag: tagName,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: numTagPages,
            currentPage: currPage,
            blogLink: tagUrl,
            // blogLink: `${BLOG}/categories/${tagName
            //   .toLowerCase()
            //   .replace(/ /g, "-")}`,
          },
        })
      }
    })
  } catch (err) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    console.log("[gatsby-node]: --- " + err)
  }
}
