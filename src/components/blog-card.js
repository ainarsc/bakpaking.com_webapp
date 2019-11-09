import React, { Fragment } from "react"
import styled from "styled-components"
import FancyLine from "./elements/FancyLine"
import { Link } from "gatsby"

// TODO: Implement helper function to slice each intro text down to some number of chars

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
      transform: scale(1.05);
    }
  }
  @media only screen and (${({ theme }) => theme.laptopS}) {
    width: 80%;
  }
`

const LeftSide = styled.div`
  width: 70%;
  height: 15rem;
  position: relative;
  align-self: center;
  overflow: hidden;
  background: ${({ theme }) => theme.primaryHover};
  @media only screen and (${({ theme }) => theme.tabletS}) {
    width: 18rem;
    min-height: 10rem;
    height: auto;
    align-self: auto;
  }
`
const RightSide = styled.div`
  padding: 1rem;
  text-align: center;
  h1 {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  p {
    font-weight: lighter;
  }
  @media only screen and (${({ theme }) => theme.tabletS}) {
    width: 65%;
    text-align: left;
  }
`

const Thumbnail = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const BlogCard = ({ title, intro, link, thumbnail }) => {
  return (
    <Fragment>
      <Link to={link}>
        <Container>
          <LeftSide>
            <Thumbnail src={thumbnail} />
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

export default BlogCard
