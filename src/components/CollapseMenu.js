import React, { useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import styled from "styled-components"
// import { useSpring, animated } from "react-spring"
import { collapseNav } from "../state/actions/uiActions"
import { pushPage } from "../state/actions/locationActions"
import PropTypes from "prop-types"

// const CollapseWrapper = styled(animated.div)`
const CollapseWrapper = styled.div`
  background: rgba(230, 230, 230, 0.3);
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
    padding: 8px 0;
  }

  & a {
    font-size: 1.4rem;
    padding: 5px;
    font-style: bold;
    line-height: 2.5;
    color: ${({ theme }) => theme.primaryLight};
    background: rgba(30, 30, 30, 0.5);
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &.is-active {
      color: ${({ theme }) => theme.primaryLight};
      border-bottom: 3px solid rgba(169, 245, 237, 0.75);
    }
  }
`

const CollapseMenu = ({ isExpanded, collapseNav, pushPage, prevPage }) => {
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
              partiallyActive={true}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={() => collapseNav()}
              activeClassName="is-active"
              to="/guides"
            >
              Guides
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
          <li>
            <Link
              onClick={() => {
                collapseNav()
                if (window.location.pathname === "/contact") {
                  return
                } else {
                  window.location.pathname !== prevPage &&
                    pushPage(window.location.pathname)
                }
              }}
              activeClassName="is-active"
              to="/contact"
            >
              Contact
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
  pushPage,
}
const mapState = state => {
  const { ui, location } = state
  return { isExpanded: ui.isExpanded, prevPage: location.prevPage }
}

export default connect(mapState, mapDispatch)(CollapseMenu)
