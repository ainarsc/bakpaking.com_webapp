import React, { useState } from "react"
import styled from "styled-components"
import { Icons } from "../assets/Icons"
import Svg from "./elements/Svg"

const Dropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  min-width: 250px;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryLight};
  height: 2rem;
  cursor: pointer;

  :hover {
    transition: ease-in-out 0.2s;
    border-bottom-color: ${({ theme }) => theme.secondaryLighter};
    svg {
      transition: ease-in-out 0.25s;
      fill: ${({ theme }) => theme.secondaryLighter};
    }
  }
  svg {
    padding-bottom: 7px;
    fill: ${({ theme }) => theme.secondaryLight};
  }
  svg[data-icon="arrow"] {
    transform: ${({ open }) => (open ? "rotate(180deg)" : "none")};
  }
`
const Container = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: row;
  flex-wrap: wrap;
  margin: -1rem 1rem 2.5rem;
  min-width: 200px;
  max-width: 700px;
  align-items: center;
  justify-content: center;
`

const TagContainer = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dropdown open={open} onClick={() => setOpen(!open)}>
        <Svg small dataPath={Icons.search.datapath} icon={"search"} />
        <Svg small dataPath={Icons.arrowUp.datapath} icon={"arrow"} />
      </Dropdown>
      <Container open={open}>{children}</Container>
    </>
  )
}

export default TagContainer
