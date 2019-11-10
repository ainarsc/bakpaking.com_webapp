import React from "react"
import Header from "../components/blog-header"
import Article from "../components/elements/Article"
import image from "../images/tb3.jpg"
import Layout from "../components/layout"

const Post = ({ text }) => {
  return (
    <Layout>
      <Header imagePath={image} isTrue={true}>
        BLOG POST TITLE
      </Header>
      <Article>{text}</Article>
    </Layout>
  )
}

export default Post
