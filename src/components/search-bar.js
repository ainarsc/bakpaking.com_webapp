import React, { useState } from "react"
import styled from "styled-components"
import { Icons } from "../assets/Icons"
import Svg from "./elements/Svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  @media only screen and (${({ theme }) => theme.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
  }
`
const SearchIcon = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.tablet}) {
    display: block;
    width: 10%;
    svg {
      fill: ${({ theme }) => theme.secondaryLighter};
      :hover {
        fill: ${({ theme }) => theme.secondaryLighter};
      }
    }
  }
`
const InputFields = styled.div`
  width: 70%;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  @media only screen and (${({ theme }) => theme.tablet}) {
    height: auto;
    display: flex;
    flex-direction: row;
    width: auto;
  }
`

const InputBar = styled.input`
  margin: 5px 0;
  padding: 3px;
  background: rgb(35, 35, 35);
  border: none;
  border-radius: 3px;
  font-weight: lighter;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.secondaryLighter};
    padding-left: 2px;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    margin: 0 7px;
  }
`

const Dropdown = styled.select`
  margin: 5px 0;
  height: 2rem;
  background: rgb(35, 35, 35);
  border: none;
  border-radius: 2px;
  font-weight: lighter;
  color: ${({ theme }) => theme.secondaryLighter};
  :focus {
    outline: none;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    margin: 0 7px;
  }
`

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 2.2rem;
  width: 70%;
  padding: 0 3px;
  margin-bottom: 5px;
  cursor: pointer;
  background: rgb(35, 35, 35);
  border-radius: 4px;

  svg {
    fill: ${({ theme }) => theme.secondaryLighter};
    :hover {
      fill: ${({ theme }) => theme.secondaryLighter};
    }
  }
  svg[data-icon="arrow"] {
    transform: ${({ open }) => (open ? "rotate(180deg)" : "none")};
    transition: 0.3s;
  }
  @media only screen and (${({ theme }) => theme.tablet}) {
    display: none;
  }
`

const SearchBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Button open={open} onClick={() => setOpen(!open)}>
        <Svg small dataPath={Icons.search.datapath} icon={"search"} />
        <Svg small dataPath={Icons.arrowUp.datapath} icon={"arrow"} />
      </Button>
      <SearchIcon>
        <Svg small dataPath={Icons.search.datapath} icon={"search"} />
      </SearchIcon>
      <InputFields>
        <InputBar placeholder="Search" />
        <Dropdown>
          <option value="All Topics">All Topics</option>
          <option value="How To Save">How To Save</option>
          <option value="Where To Go">Where To Go</option>
          <option value="Random Travel Events">Random Travel Events</option>
        </Dropdown>
        <Dropdown>
          <option value="All Topics">Most Recent</option>
          <option value="How To Save">Alphabetical(A-Z)</option>
          <option value="Where To Go">Alphabetical(Z-A)</option>
        </Dropdown>
      </InputFields>
    </Container>
  )
}

export default SearchBar
