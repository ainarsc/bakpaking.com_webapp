import React from "react"
import Header from "../components/blog-header"
import Main from "../components/elements/Main"
import Article from "../components/elements/Article"
import image from "../images/tb3.jpg"

const Post = ({ text }) => {
  return (
    <Main>
      <Header imagePath={image} isTrue={true}>
        BLOG POST TITLE
      </Header>
      <Article>{text}</Article>
    </Main>
  )
}

export default Post
