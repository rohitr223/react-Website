import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)


  return (
    <div>
        <div className="navbar-container">
            <h2 className="logo">CODES</h2>
            <ul className={isMobile ? "nav-links-mobile" : "navbar-links"} onClick={() => setIsMobile(false)}>
                <Link to="/" className="links">HOME</Link>
                <Link to="/about" className="links">ABOUT</Link>
                <Link to="/blog" className="links">BLOG</Link>
                <Link to="/contact" className="links">CONTACT</Link>
                <Link to="/signup" className="signup links">SIGN-UP</Link>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<i className="fa fa-times icon"></i>) : (<i className="fa fa-bars icon"></i>)}
            </button>
        </div>
    </div>
  )
}

export default Navbar