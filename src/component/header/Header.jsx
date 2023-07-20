import React from 'react'
import Nav from './Nav'
import { FaArrowRight } from "react-icons/fa"
import Feature from './Feature'
import About from '../About'
import Service from '../Service'
import Choose from '../Choose'
import OurProject from '../OurProject'
import Call from '../Call'
import Counter from '../Counter'
import Testimonial from '../Testimonial'
import Contact from '../Contact'
import Footer from '../Footer'
import "../header/style.css"
const Header = () => {
  return (
    <>
      <Nav />
      
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-text">WELCOME TO NOSEI</p>
            <h2 className="hero-title">Best IT-Solution And Business</h2>
            <p className="hero-text1">Nullam eu nibh vitae est tempor molestie id sed exthe. Quisque
              dignissim maximus ipsum metus ipsum.</p>
            <button className="hero-btn">Contact Us <span><FaArrowRight /> </span></button>
          </div>
        </div>
     
      <Feature/>
      <About/>
      <Service/>
      <Choose/>
      <OurProject/>
      <Call/>
      <Counter/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Header