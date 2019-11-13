import React from "react"
import Header from "../components/blog-header"
import Article from "../components/elements/Article"
import { graphql } from "gatsby"
import image from "../images/tb3.jpg"
import Layout from "../components/layout"

const Post = ({ data }) => {
  // const post = data.markdownRemark
  // const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <h1>Foo</h1>
      {/* <Header imagePath={image} isTrue={true} date={post.frontmatter.date}>
        {post.frontmatter.title}
      </Header>
      <Article dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </Layout>
  )
}

// export const query = graphql`
//   {
//     markdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "YYYY-MM-DD")
//             path
//             published
//           }
//           html
//         }
//       }
//     }
//   }
// `

export default Post
