import React, { useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import styled from "styled-components"
// import { useSpring, animated } from "react-spring"
import { collapseNav } from "../state/actions/uiActions"
import PropTypes from "prop-types"

// const CollapseWrapper = styled(animated.div)`
const CollapseWrapper = styled.div`
  background: ${({ theme }) => theme.secondaryLight};
  position: fixed;
  top: 3.5rem;
  left: 0;
  right: 0;
  z-index: 98;
  border-bottom: 1px solid ${({ theme }) => theme.primaryDark};
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 1rem;
  text-align: center;
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2.5;
    color: ${({ theme }) => theme.primaryLight};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &.is-active {
      color: ${({ theme }) => theme.primaryLight};
      border-bottom: 1px solid ${({ theme }) => theme.primaryLight};
    }
  }
`

const CollapseMenu = ({ isExpanded, collapseNav }) => {
  // const { open } = useSpring({ open: isExpanded ? 0 : 1 })

  useEffect(() => {
    const handler = () => isExpanded && collapseNav()
    window.addEventListener("resize", handler)
    window.addEventListener("scroll", handler)
    return () => {
      window.removeEventListener("resize", handler)
      window.removeEventListener("scroll", handler)
    }
  }, [isExpanded, collapseNav])

  if (isExpanded === true) {
    return (
      <CollapseWrapper
      // style={{
      //   transform: open
      //     .to({
      //       range: [0, 0.2, 0.3, 1],
      //       output: [0, -20, 0, -200],
      //     })
      //     .to(openValue => `translate3d(0, ${openValue}px, 0`),
      // }}
      >
        <NavLinks>
          <li>
            <Link
              onClick={() => collapseNav()}
              activeClassName="is-active"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={() => collapseNav()}
              activeClassName="is-active"
              to="/travel-tips"
            >
              Travel Tips
            </Link>
          </li>
          <li>
            <Link
              onClick={() => collapseNav()}
              activeClassName="is-active"
              to="/about"
            >
              About
            </Link>
          </li>{" "}
        </NavLinks>
      </CollapseWrapper>
    )
  } else {
    return null
  }
}

CollapseMenu.propTypes = {
  isExpanded: PropTypes.bool,
  collapseNav: PropTypes.func,
}

const mapDispatch = {
  collapseNav,
}
const mapState = state => {
  const { ui } = state
  return { isExpanded: ui.isExpanded }
}

export default connect(
  mapState,
  mapDispatch
)(CollapseMenu)
