import React, { Fragment } from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import FancyButton from "../components/elements/FancyButton"
import bgSmall from "../images/bg-s.jpg"
import bgMedium from "../images/bg-m.jpg"
import bgLarge from "../images/bg-l.jpg"
import bgXL from "../images/bg-xl.jpg"
import bg4k from "../images/bg-xxl.jpg"
import GlobalStyles from "../global"

const sizes = { bgSmall, bgMedium, bgLarge, bgXL, bg4k }

const BackgroundImage = styled.div`
  height: 100vh;
  background-image: url(${props => props.size.bgSmall});
  background-size: cover;
  background-position: center;
  filter: blur(3px);

  /* 
    background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1), url()
  */

  @media only screen and (${({ theme }) => theme.tabletS}) {
    background-image: url(${props => props.size.bgMedium});
  }
  @media only screen and (${({ theme }) => theme.laptopS}) {
    background-image: url(${props => props.size.bgLarge});
  }
  @media only screen and (${({ theme }) => theme.laptopL}) {
    background-image: url(${props => props.size.bgXL});
  }
`

const Container = styled.section`
  position: absolute;
  top: 0px;
  left: 0px;
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
  background: rgba(0, 0, 0, 0.4);
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
      <BackgroundImage size={sizes} />

      <Container>
        <Highlight>
          <Title>No BS guide to travel</Title>
          <Line />
          <FancyButton path="/blog">Enter</FancyButton>
        </Highlight>
      </Container>
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
