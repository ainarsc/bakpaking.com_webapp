import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Links = styled.div`
  margin-top: 1rem;
`

const PageLinks = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <Links>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </Links>
  )
}

export default PageLinks
