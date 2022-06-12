import React from 'react'
import './Services.css'
import '../css/bootstrap.min.css'

const Services = () => {
  return (
    <div className="services">
        <div className="services-page">
            <h2 className="page-heading">Our Services</h2>
            <p className="page-subtitle">What do we do ?</p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h5 className="serv-heading">We believe in learning new technologies.</h5>
                    <p className="serv-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Pariatur voluptas sit minima maiores animi consequatur voluptate 
                    adipisci voluptatum hic id assumenda, optio earum unde voluptates maxime eos repellat nostrum quibusdam.</p>
                </div>
                <div className="col-md-6">
                    <img src="images/coder.png" alt="service-image" className="serv-img" />
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src="images/javap.png" alt="service-image" className="serv-img" />
                </div>
                <div className="col-md-6">
                <h5 className="serv-heading">Flexible learning time</h5>
                    <p className="serv-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Pariatur voluptas sit minima maiores animi consequatur voluptate 
                    adipisci voluptatum hic id assumenda, optio earum unde voluptates maxime eos repellat nostrum quibusdam.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services