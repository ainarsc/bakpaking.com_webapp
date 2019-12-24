import React, { Fragment } from "react"
import styled from "styled-components"
import SEO from "../components/seo/"
import FancyButton from "../components/elements/FancyButton"
import bgSmall from "../images/bg-s.jpg"
import bgMedium from "../images/bg-m.jpg"
import bgLarge from "../images/bg-l.jpg"
import GlobalStyles from "../global"
import logo from "../images/icon.png"
import title from "../images/title.png"

const sizes = { bgSmall, bgMedium, bgLarge }

const BackgroundImage = styled.div`
  height: 100vh;
  background-image: url(${props => props.size.bgSmall});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: blur(3px);

  @media only screen and (${({ theme }) => theme.tabletS}) {
    background-image: url(${props => props.size.bgMedium});
  }
  @media only screen and (${({ theme }) => theme.laptopL}) {
    background-image: url(${props => props.size.bgLarge});
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
  color: ${({ theme }) => theme.primaryLight};
  a {
    align-self: center;
  }
`

const Highlight = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  justify-content: center;

  @media only screen and (${({ theme }) => theme.mobileL}) {
    width: auto;
    border-radius: 5px;
    padding: 0 2rem;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  h1 {
    align-self: center;
  }
`

const Headline = styled.img`
  max-height: 50px;
  padding: 0.5rem;

  @media only screen and (${({ theme }) => theme.mobileS}) {
    max-height: 70px;
  }
  @media only screen and (${({ theme }) => theme.tabletS}) {
    max-height: 100px;
  }

  /* font-family: "amatic sc";
  font-size: 2rem;
  color: #f2f2f2;
  text-align: center;
  font-weight: lighter;

  @media only screen and (${({ theme }) => theme.mobileS}) {
    font-size: 3rem;
  }
  @media only screen and (${({ theme }) => theme.tabletS}) {
    font-size: 4.5rem;
  }
  @media only screen and (${({ theme }) => theme.laptopS}) {
    font-size: 5.5rem;
  } */
`

const Icon = styled.img`
  max-height: 50px;
  max-width: 50px;
  padding: 0.5rem;

  @media only screen and (${({ theme }) => theme.mobileS}) {
    max-width: 70px;
    max-height: 70px;
  }
  @media only screen and (${({ theme }) => theme.tabletS}) {
    max-width: 100px;
    max-height: 100px;
  }
`
const Line = styled.div`
  height: 1px;
  width: 70%;
  margin: auto;
  background: #f2f2f2;
`

const IndexPage = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <SEO />
      <BackgroundImage size={sizes} />
      <Container>
        <Highlight>
          <Row>
            <Icon src={logo} alt="App Logo" />
            <Headline src={title} alt="App Title" />
          </Row>

          <Line />
          <FancyButton path="/blog">Enter</FancyButton>
        </Highlight>
      </Container>
    </Fragment>
  )
}

export default IndexPage
