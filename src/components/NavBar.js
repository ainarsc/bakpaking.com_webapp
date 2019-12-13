import React, { useRef } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Link } from "gatsby"
import MenuIcon from "./elements/MenuIcon"
import CollapseMenu from "./CollapseMenu"
import { useOnClickOutside } from "../hooks"
import { collapseNav } from "../state/actions/uiActions"
import PropTypes from "prop-types"

/////// Nav Bar styling ////////
const Container = styled.div`
  position: fixed;
  height: 3.5rem;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 99;
  background: ${({ theme }) => theme.main};
  border-bottom: 2px solid ${({ theme }) => theme.secondaryDark};

  @media only screen and (${({ theme }) => theme.tablet}) {
    justify-content: center;
  }
`

const Logo = styled.div`
  padding-left: 1rem;
  a {
    font-size: 1.2rem;
    padding: 0 0.4rem;
    border: 3px double ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryLight};
    :hover {
      background: none;
    }
    @media only screen and (${({ theme }) => theme.mobileM}) {
      font-size: 1.5rem;
    }
  }

  @media only screen and (${({ theme }) => theme.tablet}) {
    width: 50%;
    padding-left: 3rem;
  }
`

const NavLinks = styled.ul`
  display: none;
  height: 100%;
  & a {
    padding: 1rem 0.5rem;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: lighter;
    :hover,
    &.is-active {
      background: ${({ theme }) => theme.primaryHover};
    }
  }

  @media only screen and (${({ theme }) => theme.tablet}) {
    width: 50%;
    padding-right: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    list-style-type: none;
  }
`

// Default styling
const theme = {
  main: "gray",
  secondaryDark: "black",
  primaryHover: "rgba(0, 0, 0, 0.5)",
  tablet: `min-width: 768px`,
}
Container.defaultProps = { theme }
Logo.defaultProps = { theme }

const NavBar = ({ collapseNav, isExpanded }) => {
  const node = useRef()

  useOnClickOutside(node, () => {
    return isExpanded ? collapseNav() : null
  })

  //Check if landing page, if so don't use the navbar
  return (
    <div ref={node}>
      <Container>
        <Logo>
          <Link onClick={() => isExpanded && collapseNav()} to="/">
            bakpaking
          </Link>
        </Logo>
        <MenuIcon />
        <NavLinks>
          <li>
            <Link activeClassName="is-active" to="/blog" partiallyActive={true}>
              Blog
            </Link>
          </li>
          <li>
            <Link activeClassName="is-active" to="/travel-tips">
              Travel Tips
            </Link>
          </li>
          <li>
            <Link activeClassName="is-active" to="/about">
              About
            </Link>
          </li>
        </NavLinks>
      </Container>
      <CollapseMenu />
    </div>
  )
}

NavBar.propTypes = {
  collapseNav: PropTypes.func,
  isExpanded: PropTypes.bool,
}

const mapState = state => {
  const { ui } = state
  return { isExpanded: ui.isExpanded }
}

const mapDispatch = { collapseNav }

export default connect(
  mapState,
  mapDispatch
)(NavBar)