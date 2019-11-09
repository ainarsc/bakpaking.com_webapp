import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const Blur = styled.div`
  position: absolute;
  width: 100%;
  filter: ${props => (props.open ? "blur(8px)" : "")};
  ${props => props.open && "pointer-events: none"};
`

const Backdrop = ({ isExpanded, children }) => {
  return <Blur open={isExpanded}>{children}</Blur>
}

const mapState = ({ ui }) => {
  return { isExpanded: ui.isExpanded }
}

export default connect(mapState)(Backdrop)
