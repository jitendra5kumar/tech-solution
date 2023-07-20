import React from 'react'
import Logo from "../../esset/logo-bg.png"
import Logo_img from "../../esset/logo.png"
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"
import {LiaBehance} from "react-icons/lia"
import {CiSearch} from "react-icons/ci"
import {FaArrowRight} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='nav-container'>
      
      <div className="nav-content2">
        <div className="nav-bg-logo">
          <img src={Logo} alt="" />
          <div className="logo">
            <img src={Logo_img} alt="" />
          </div>
        </div>
        <div className="nav-content-right">
          <div className="nav-top-bar">
            <div className="nav-social-icon">
              <p>Visit our social pages:</p>
              <p className='icons'><FaFacebookF/></p>
              <p className='icons'><BsTwitter/></p>
              <p className='icons'><FaLinkedinIn/></p>
              <p className='icons'><LiaBehance/></p>
            </div>
            <div className="nav-language">
              <select name="" id="">
                <option value="1">English</option>
                <option value="1">Hindi</option>
                <option value="1">Arabic</option>
                <option value="1">Bangla</option>
              </select>
            </div>
          </div>
          <div className="nav-bottm-bar">
            <div className="nav-home-bar">
              <ul>
                <li>
                 
                  <NavLink to="/home" >Home <span></span></NavLink>
                  {/* <ul>
                    <li>Home 1</li>
                    <li>Home 2</li>
                    <li>Home 3</li>
                    <li>Home 4</li>
                    <li>Home 5</li>
                  </ul> */}
                </li>

                <li>About</li>
                <li><NavLink to="/service">Services <span>^</span></NavLink>
                <ul>
                  <li>Service</li>
                  <li>Project</li>
                  <li>Project Details</li>
                  <li>Team</li>
                  <li>Team Details</li>
                  <li>404</li>
                </ul>
                </li>
                <li><NavLink to="portfolio">Portfolio <span></span></NavLink>
                
                </li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="nav-search-bar">
              <p className='search-icon'>
                <CiSearch className='search'/>
                </p>
              <button>Contact Us <span> <FaArrowRight/> </span></button>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
    </>
  )
}

export default Nav