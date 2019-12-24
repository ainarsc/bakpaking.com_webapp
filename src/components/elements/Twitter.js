import React from "react"
import Svg from "./Svg"
import { twitter } from "../../assets/Icons"

const Twitter = props => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${props.link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Svg {...props} dataPath={twitter.datapath} icon={"twitter"} />
    </a>
  )
}

export default Twitter
