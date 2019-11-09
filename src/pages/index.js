import React, { Fragment } from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import FancyButton from "../components/elements/FancyButton"
import landingImage from "../images/me.jpg"
import GlobalStyles from "../global"
// import Layout from "../components/layout"
// import Image from "../components/image"

const BackgroundImage = styled.section`
  height: 100vh;
  position: relative;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${props => props.img});
  background-size: cover;
  background-position: center;
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f2f2f2;
  text-align: center;
  font-weight: lighter;
  padding: 1.5rem;
`

const Highlight = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  justify-content: center;
`

const Line = styled.div`
  height: 1px;
  background: #f2f2f2;
  width: 60%;
  margin: auto;
`

const IndexPage = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <SEO title="Home" />
      <BackgroundImage img={landingImage}>
        <Container>
          <Highlight>
            <Title>No BS guide to travel</Title>
            <Line />
            <FancyButton path="/blog">Enter</FancyButton>
          </Highlight>
        </Container>
      </BackgroundImage>
    </Fragment>
  )
}

// <Layout>
//
//   <h1>Hi people</h1>
//   <p>Welcome to your new Gatsby site.</p>
//   <p>Now go build something great.</p>
//   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//     <Image />
//   </div>
//   <Link to="/page-2/">Go to page 2</Link>
// </Layout>

export default IndexPage
