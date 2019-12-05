import React from "react"
import styled from "styled-components"

const SvgWrapper = styled.svg.attrs(props => ({
  height: props.small ? "2rem" : "2.5rem",
  width: props.small ? "2.5rem" : "3rem",
}))`
  fill: ${({ theme }) => theme.primaryLight};
  padding: 3px;
`

const Svg = props => {
  return (
    <SvgWrapper
      {...props}
      aria-hidden="true"
      data-icon={props.icon}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      focusable="false"
    >
      <path d={props.dataPath}></path>
    </SvgWrapper>
  )
}

export default Svg
