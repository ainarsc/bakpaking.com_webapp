import React, { Fragment } from "react"
import styled from "styled-components"
import FancyLine from "./elements/FancyLine"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Container = styled.div`
  min-height: 12rem;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  transition: 300ms ease-in-out;
  border: 1px solid rgba(169, 245, 237, 0);
  @media only screen and (${({ theme }) => theme.tablet}) {
    flex-direction: row;
    :hover {
      background: ${({ theme }) => theme.secondaryHover};
      border: 1px solid rgba(169, 245, 237, 0.4);

      /* transform: scale(1.02); */
      transition-delay: 0.1s;
    }
  }
`

const LeftSide = styled.div`
  width: 100%;
  position: relative;
  align-self: center;
  overflow: hidden;
  border-radius: 2px;
  background: ${({ theme }) => theme.primaryHover};
  @media only screen and (${({ theme }) => theme.mobileL}) {
    width: 80%;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    min-width: 280px;
    min-height: 100%;
    align-self: stretch;
  }
`
const RightSide = styled.div`
  padding: 0.5rem;
  align-self: flex-start;
  line-height: 1.5rem;
  text-align: center;
  h1 {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  p {
    font-weight: lighter;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    text-align: left;
    padding-top: 0;
    padding-left: 1rem;
  }
`

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
