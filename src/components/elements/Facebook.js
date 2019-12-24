import React from "react"
import Svg from "./Svg"
import { facebook } from "../../assets/Icons"

const Facebook = props => {
  return (
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${props.link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Svg {...props} dataPath={facebook.datapath} icon={"facebook"} />
    </a>
  )
}

export default Facebook
