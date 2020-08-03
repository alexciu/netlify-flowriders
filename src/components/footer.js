import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

let currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>©{currentYear} Flow Riders Brasov <span className="icon -love"><RiHeart2Line /></span> by <Link to="/">Ciu</Link></p>
    </div>
  </footer>
)

export default Footer