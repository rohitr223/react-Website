import React from 'react'
import './Blog.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Blog = () => {
  return (
    <div>
        <div className="blog-container">
          <Navbar/>
            <div className="blog-text">
              <h1 className="blog-h">Blog's</h1>
            </div>
        </div>

        <div className="blog-info">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 className="blg-t">Get Updated with the latest technologies.</h4>
                <p className="blg-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat 
                sit, reprehenderit cumque, fugit non nisi hic veniam qui consequatur accusantium
                quisquam facilis incidunt at quidem repellendus laudantium. Obcaecati esse tempora
                sequi. Culpa qui molestiae, nesciunt cum quas sit nam rerum optio consequuntur, 
                sed neque. Voluptates nobis deserunt saepe quaerat?
                </p>
              </div>
              <div className="col-md-6">
                <img src="images/job.png" className="blog-img" />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog