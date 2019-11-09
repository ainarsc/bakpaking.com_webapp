import React from "react"
import styled from "styled-components"

const SvgWrapper = styled.svg.attrs(props => ({
  height: props.small ? "2rem" : "3rem",
  width: props.small ? "2.5rem" : "3.5rem",
}))`
  fill: ${({ theme }) => theme.primaryLight};
  transition: fill 0.25s;
  padding: 3px;
  :hover {
    fill: #14a76c;
  }
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
    >
      <path d={props.dataPath}></path>
    </SvgWrapper>
  )
}

export default Svg
