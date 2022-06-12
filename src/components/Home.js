import React from 'react'
import './Home.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Services from './Services'


const Home = () => {
  return (
    <div>
        <div className="home-page">
            <Navbar/>

            <div className="text-box">
                <h1>Welcome to CODES</h1>
                <p>An Online Learning Platform For Programming.</p>
                <a href="/" className="hero-btn">Learn More</a>
            </div>
        </div>

        <Services/>

        <Footer/>
    </div>
  )
}

export default Home