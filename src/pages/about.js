import React from "react"
import photo from "../images/me.jpg"
import Header from "../components/blog-header"
import Article from "../components/elements/Article"
import Layout from "../components/layout"

const About = props => {
  return (
    <Layout>
      <Header imagePath={photo} isTrue={false}>
        THIS IS ME
      </Header>
      <Article>{props.text}</Article>
    </Layout>
  )
}

export default About
