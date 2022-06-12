import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import '../css/bootstrap.min.css'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className="contact-container">
            <Navbar/>
            <h3 className="contact-heading">Contact Us</h3>
        </div>

        <div className="contact-form">
          <div className="contact-box">
            <form>
              <input type="text" className="input-field" placeholder="Your Name" />
              <input type="email" className="input-field" placeholder="Your Email" />
              <input type="text" className="input-field" placeholder="Subject" />
              <textarea type="text" className="input-field textarea-field" placeholder="Your Message"/>
              <div className="form-button">
                <button type="submit" className="form-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact