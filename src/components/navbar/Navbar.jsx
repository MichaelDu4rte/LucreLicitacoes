import "./NavBar.scss"
import { IoMenu } from "react-icons/io5";
import {IoMdClose} from 'react-icons/io'
import { useState } from "react"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
  <header className="navbar">
      <nav className="navbar-container wrapper">
        <a href="" className="navbar-logo">Lucre com licitações</a>

        <ul className={`${showNav ? "show" : ""}`}>
          <li onClick={() => setShowNav(false)}><a href="#">Product</a></li>
          <li onClick={() => setShowNav(false)}><a href="#">Product</a></li>
          <li onClick={() => setShowNav(false)}><a href="#">Product</a></li>
          <li onClick={() => setShowNav(false)}><a href="#">Product</a></li>
        </ul>

        <div className="navbar-btn">
          <a href="" className="btn">Fale com um especialista</a>
        </div>

        <div className="navbar-menu" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoMdClose /> : <IoMenu/>}
        </div>
      </nav>
  </header>
  )
}

export default Navbar