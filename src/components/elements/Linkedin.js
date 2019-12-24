import React from "react"
import Svg from "./Svg"
import { linkedin } from "../../assets/Icons"

const Linkedin = props => {
  return (
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=${props.link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Svg {...props} dataPath={linkedin.datapath} icon={"linkedin"} />
    </a>
  )
}

export default Linkedin
