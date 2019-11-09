import React from "react"
import photo from "../images/me3.jpg"
import Header from "../components/blog-header"
import Article from "../components/elements/Article"
import Main from "../components/elements/Main"

const About = props => {
  return (
    <Main>
      <Header imagePath={photo} isTrue={false}>
        THIS IS ME
      </Header>
      <Article>{props.text}</Article>
    </Main>
  )
}

export default About
