import React from "react"
import Svg from "./Svg"
import { twitter } from "../../assets/Icons"

const Twitter = ({ link }) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Svg dataPath={twitter.datapath} icon={"twitter"} />
    </a>
  )
}

export default Twitter
