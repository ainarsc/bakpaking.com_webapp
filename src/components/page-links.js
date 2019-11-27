import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.ul`
  padding: 0;
  min-width: 200px;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    padding: 2px;
    align-self: center;
    text-align: center;
  }
  a {
    font-size: 1.2rem;
    padding: 7px;
    align-self: center;
    text-align: center;
    :hover {
      color: #14a76c;
      transition: 0.25s;
    }
  }
`
const StyledLink = styled(Link)`
  background-color: ${({ current }) => current};
`

const PageLinks = ({
  isFirst,
  isLast,
  prevPage,
  nextPage,
  currentPage,
  numPages,
}) => {
  return (
    <Container>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          {/* <Svg small dataPath={arrowLeft.datapath} icon={"angle-left"} /> */}
          &#60;&#60;
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <li key={`pgnr${i + 1}`}>
          <StyledLink
            to={`/blog/${i === 0 ? "" : i + 1}`}
            current={i + 1 === currentPage ? "#242424" : ""}
          >
            {i + 1}
          </StyledLink>
        </li>
      ))}

      {!isLast && (
        <Link to={nextPage} rel="next">
          {/* <Svg small dataPath={arrowRight.datapath} icon={"angle-right"} /> */}
          &#62;&#62;
        </Link>
      )}
    </Container>
  )
}

export default PageLinks
