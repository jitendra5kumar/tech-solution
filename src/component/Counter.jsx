import React from 'react'
import {FaNetworkWired} from "react-icons/fa"
import {RiLifebuoyLine} from "react-icons/ri"
import {FcOnlineSupport} from "react-icons/fc"
import {AiFillBank} from "react-icons/ai"
const Counter = () => {
  return (
    <>
    <div className="counter-section">
        <div className="counter-content">
            <h2>WHAT WE DO?</h2>
            <h1>We High Service That Stand</h1>
        </div>
        <div className="counter-container">
            <div className="counter-box">
                <h3>26+</h3>
                <p>Planning solution</p>
                <span className='counter-icon'><FaNetworkWired/></span>
            </div>
            <div className="counter-box">
                <h3>35k</h3>
                <p>Projects Analizs</p>
                <span className='counter-icon'><RiLifebuoyLine/></span>
            </div>
            <div className="counter-box">
                <h3>96k</h3>
                <p>Growing Business</p>
                <span className='counter-icon'><AiFillBank/></span>
            </div>
            <div className="counter-box">
                <h3>55+</h3>
                <p>Team Support</p>
                <span className='counter-icon'><FcOnlineSupport/></span>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Counter