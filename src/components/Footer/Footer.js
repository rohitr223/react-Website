import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="footer-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="footer-links">
              <Link to="/" className="f-links">HOME</Link>
              <Link to="/about" className="f-links">ABOUT</Link>
              <Link to="/blog" className="f-links">BLOG</Link>
              <Link to="/contact" className="f-links">CONTACT</Link>
              <Link to="/signup" className="f-links">SIGN-UP</Link>
            </div>

            <div className="footer-text">
              <h4 className="cpy-info">&copy; 2022 CODES. All rights reserved.</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer