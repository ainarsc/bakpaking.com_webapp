import React, { Fragment } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const ImgContainer = styled.div`
  width: 95%;
  max-height: 400px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 0.8rem;
  max-width: 500px;
  border-radius: 3px;
`

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 5px;
  background: rgba(50, 50, 50, 0.5);
  padding: 3px 20px;
  text-align: center;
  font-weight: 400;
  @media only screen and (${({ theme }) => theme.tabletS}) {
    font-size: 2rem;
  }
`

const SubHeading = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.8rem;
  text-align: center;
  @media only screen and (${({ theme }) => theme.tabletS}) {
    font-size: 1.2rem;
  }
`

const Header = ({ isTrue, imagePath, date, children }) => {
  return (
    <Fragment>
      <Heading>{children}</Heading>
      {isTrue ? <SubHeading>{date} by Ainars Ciesa</SubHeading> : null}
      <ImgContainer>
        <Img fluid={imagePath} />
      </ImgContainer>
    </Fragment>
  )
}

Header.propTypes = {
  isTrue: PropTypes.bool,
  imagePath: PropTypes.object,
  date: PropTypes.string,
}

export default Header
