import React, { Fragment } from "react"
import styled from "styled-components"
import FancyLine from "./elements/FancyLine"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Container = styled.div`
  min-height: 10rem;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  transition: 300ms ease-in-out;

  @media only screen and (${({ theme }) => theme.tabletS}) {
    flex-direction: row;
    :hover {
      background: ${({ theme }) => theme.secondaryHover};
      /* transform: scale(1.05); */
    }
  }
  @media only screen and (${({ theme }) => theme.laptopS}) {
    width: 75%;
  }
`

const LeftSide = styled.div`
  width: 100%;
  max-height: 15rem;
  position: relative;
  align-self: center;

  overflow: hidden;
  background: ${({ theme }) => theme.primaryHover};
  @media only screen and (${({ theme }) => theme.mobileL}) {
    width: 80%;
  }
  @media only screen and (${({ theme }) => theme.tabletS}) {
    max-width: 40%;
    min-height: 100%;
    align-self: stretch;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    max-width: 15rem;
    max-height: 10rem;
  }
  @media only screen and (${({ theme }) => theme.laptopS}) {
    max-height: 10rem;
  }
  @media only screen and (${({ theme }) => theme.laptopL}) {
    max-width: 20rem;
    max-height: 10rem;
    align-self: center;
    /* align-self: flex-start; */
  }
`
const RightSide = styled.div`
  padding: 0.5rem;
  text-align: center;
  align-self: center;
  h1 {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  p {
    font-weight: lighter;
  }
  @media only screen and (${({ theme }) => theme.tabletS}) {
    width: 60%;
    text-align: left;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    p {
      line-height: 1.3rem;
    }
  }
`

// const Thumbnail = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border: 1px solid rgba(255, 255, 255, 0.2);
// `

const BlogCard = ({ title, intro, link, thumbnail }) => {
  return (
    <Fragment>
      <Link to={link}>
        <Container>
          <LeftSide>
            <Img fluid={thumbnail} style={{ position: "static" }} />
          </LeftSide>
          <RightSide>
            <article>
              <h1>{title}</h1>
              <p>{intro}</p>
            </article>
          </RightSide>
        </Container>
      </Link>
      <FancyLine />
    </Fragment>
  )
}

BlogCard.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  link: PropTypes.string,
  thumbnail: PropTypes.object,
}

export default BlogCard
