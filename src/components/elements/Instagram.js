import React from "react"
import { instagram } from "../../assets/Icons"
import Svg from "./Svg"

const Instagram = props => {
  return (
    <a
      href={`https://www.instagram.com/ainarc_travels/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Svg {...props} dataPath={instagram.datapath} icon={"instagram"} />
    </a>
  )
}

export default Instagram
