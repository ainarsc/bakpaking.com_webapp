import React from "react"
import Svg from "./Svg"
import { linkedin } from "../../assets/Icons"

const Linkedin = ({ link }) => {
  return (
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=${link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Svg dataPath={linkedin.datapath} icon={"linkedin"} />
    </a>
  )
}

export default Linkedin
