import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

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
  border-radius: 2px;
`

const PageLinks = ({ pagination }) => {
  const { currentPage, numPages, blogLink } = pagination

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1
      ? blogLink
      : `${blogLink}/${(currentPage - 1).toString()}`

  const nextPage = `${blogLink}/${(currentPage + 1).toString()}`

  return (
    <Container>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          &#60;&#60;
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <li key={`pgnr${i + 1}`}>
          <StyledLink
            to={`${blogLink}${i === 0 ? "" : "/" + (i + 1)}`}
            current={i + 1 === currentPage ? "rgb(40, 40, 40)" : ""}
          >
            {i + 1}
          </StyledLink>
        </li>
      ))}

      {!isLast && (
        <Link to={nextPage} rel="next">
          &#62;&#62;
        </Link>
      )}
    </Container>
  )
}

PageLinks.propTypes = {
  pagination: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
    blogLink: PropTypes.string,
  }),
}

export default PageLinks
