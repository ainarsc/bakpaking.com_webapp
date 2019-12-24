import React from "react"
import Svg from "./Svg"
import { facebook } from "../../assets/Icons"

const Facebook = ({ link }) => {
  return (
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Svg dataPath={facebook.datapath} icon={"facebook"} />
    </a>
  )
}

export default Facebook
