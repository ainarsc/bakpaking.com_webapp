import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { collapseNav, expandNav } from "../../state/actions/uiActions"

const Container = styled.div`
  position: absolute;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: #f7f7f9;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media only screen and (${({ theme }) => theme.tablet}) {
    display: none;
  }
`

const MenuIcon = ({ isExpanded, collapseNav, expandNav }) => {
  const onClick = e => {
    isExpanded ? collapseNav() : expandNav()
  }

  return (
    <Container
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={isExpanded}
      onClick={e => onClick(e)}
    >
      <span />
      <span />
      <span />
    </Container>
  )
}

const mapState = state => {
  const { ui } = state
  return { isExpanded: ui.isExpanded }
}
const mapDispatch = {
  collapseNav,
  expandNav,
}

export default connect(
  mapState,
  mapDispatch
)(MenuIcon)
