import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/"><img src={props.title} alt="logo" /></Link>
  </div>
)

export default Logo