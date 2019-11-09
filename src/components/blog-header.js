import React, { Fragment } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ImgContainer = styled.div`
  width: 100%;
  min-height: 230px;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (${({ theme }) => theme.mobileL}) {
    min-height: 330px;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    width: 80%;
    min-height: 430px;
  }
  @media only screen and (${({ theme }) => theme.laptopS}) {
    width: 60%;
  }
`

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 5px;
  background: rgba(50, 50, 50, 0.5);
  padding: 3px 20px;
  text-align: center;
`

const SubHeading = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  text-align: center;
`

const Header = ({ isTrue, imagePath, children }) => {
  return (
    <Fragment>
      <Heading>{children}</Heading>
      {isTrue ? (
        <SubHeading>October 14, 2019 by Ainars Ciesa</SubHeading>
      ) : null}
      <ImgContainer>
        <Img src={imagePath} />
      </ImgContainer>
    </Fragment>
  )
}

Header.propTypes = {
  isTrue: PropTypes.bool,
  imagePath: PropTypes.string,
}

export default Header
