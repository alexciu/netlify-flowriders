import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line, RiFacebookBoxLine, RiYoutubeLine, RiInstagramLine, RiMessengerLine, RiPhoneLine, RiMailLine } from "react-icons/ri";



const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="site-footer">
    <div className="container social">
      <a href="mailto:lupu.alin@gmail.com">&nbsp;<span className="icon -social"><RiMailLine /></span></a>
      <a href="tel:+40 726 306 206">&nbsp;<span className="icon -social"><RiPhoneLine /></span></a>
      <a href="https://m.me/FlowRidersBrasov" target="NEW">&nbsp;<span className="icon -social"><RiMessengerLine /></span></a>
      <a href="https://www.facebook.com/FlowRidersBrasov/" target="NEW">&nbsp;<span className="icon -social"><RiFacebookBoxLine /></span></a>
      <a href="https://www.youtube.com/user/doomedro" target="NEW">&nbsp;<span className="icon -social"><RiYoutubeLine /></span></a>
      <a href="https://www.instagram.com/mbi_ro/" target="NEW">&nbsp;<span className="icon -social"><RiInstagramLine /></span></a>


    </div>
    <div className="container">
      <p>©{currentYear} Flow Riders Brasov <span className="icon -love"><RiHeart2Line /></span> by <Link to="/">Ciu</Link></p>
    </div>
  </footer>
)

export default Footer