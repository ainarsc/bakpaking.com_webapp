import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//TODO: Render button "as" link

const Button = styled.button`
  padding: 20px 30px;
  font-size: 30px;
  cursor: pointer;
  position: relative;
  border: 2px solid #f2f2f2;
  outline: none;
  color: #f2f2f2;
  background-color: transparent;
  margin: 1.5rem;
  white-space: nowrap;

  &::after,
  &::before,
  span::after,
  span::before {
    content: "";
    position: absolute;
    background-color: #f2f2f2;
    transition: 0.5s ease;
  }
  &::after,
  &::before {
    height: 100%;
    width: 2px;
    top: -2px;
  }
  &::after {
    left: -2px;
  }
  &::before {
    right: -2px;
  }
  span::after,
  span::before {
    height: 2px;
    width: 100%;
    left: -2px;
  }
  span::after {
    top: -2px;
  }
  span::before {
    bottom: -2px;
  }
  &:hover:after {
    transform: translatex(-12px);
  }
  &:hover:before {
    transform: translatex(12px);
  }
  &:hover span::after {
    transform: translatey(-12px);
  }
  &:hover span::before {
    transform: translatey(12px);
  }
`

const FancyButton = ({ children, path }) => {
  return (
    <Link to={path}>
      <Button>
        {children}
        <span>{/* Required for button to work properly */}</span>
      </Button>
    </Link>
  )
}

export default FancyButton
