import React from "react"
import { Link } from "gatsby"
import { email } from "../../assets/Icons"
import Svg from "./Svg"

const Email = props => {
  return (
    <Link to="/contact">
      <Svg {...props} dataPath={email.datapath} icon={"envelope-square"} />
    </Link>
  )
}

export default Email
