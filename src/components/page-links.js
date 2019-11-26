import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { arrowLeft, arrowRight } from "../assets/Icons"
import Svg from "./elements/Svg"

const Links = styled.div`
  margin-top: 1rem;
`

const PageLinks = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <Links>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          <Svg small dataPath={arrowLeft.datapath} icon={"angle-left"} />
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          <Svg small dataPath={arrowRight.datapath} icon={"angle-right"} />
        </Link>
      )}
    </Links>
  )
}

export default PageLinks
