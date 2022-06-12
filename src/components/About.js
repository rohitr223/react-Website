import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import './About.css'

const About = () => {
  return (
    <div>
        <div className="about-container">
            <Navbar/>
            <div className="about-text">
                <h1 className="about-heading">About Us</h1>
            </div>
        </div>

        <div className="abt-cont">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="about-h">Who are we ?</h3>
                        <p className="about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate 
                        commodi reiciendis quaerat veritatis molestiae sequi tempora quidem 
                        nemo quo maxime, reprehenderit sed qui officia voluptatum atque rerum 
                        esse numquam quas exercitationem at nesciunt ullam beatae pariatur excepturi?
                        Nulla, nemo perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Hic inventore fuga pariatur rerum quia. Neque cumque pariatur quae placeat? Debitis.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="images/meeting.png" className="abt-images" />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About