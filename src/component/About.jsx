import React from 'react'
import Playbtn from "../esset/play-btn.png"
import About2 from "../esset/about-2.jpg"
import {RiLifebuoyLine} from "react-icons/ri"
import {FcOnlineSupport} from "react-icons/fc"
import {BsCheck2Square} from "react-icons/bs"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <div className="about-container">
        <div className="about-content1">
            <div className="about-bg">
                <img src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <Link to="/about">
                    <img src={Playbtn} alt="" />
                </Link>
                <div className="experience">
                    <h2>Experience</h2>
                    <h3>10 +</h3>
                </div>
            </div>
                <img src={About2} alt="" className='about2-img'/>
        </div>
        <div className="about-content2">
            <div className="about-title">
                <h2>ABOUT OUR COMPANY</h2>
                <h1>About 10+ Experince Hands Such As Front Admin</h1>
                <p>In job gives you handcrafted options such as front adm in reviews or email notifications. It also gives employer management fo apps ial media in area.</p>
            </div>
            <div className="about-text">
                <div className="text">
                    <div className="text-left">
                        <div className="mission">
                        <div className="our-mision">
                            <h2>Our Mission</h2>
                            <p>

                            <RiLifebuoyLine/>
                            </p>
                          
                        </div>
                        <div className="team-support">
                            <h2>Team Support</h2>
                            <p>
                            <FcOnlineSupport/>

                            </p>
                        </div>
                        </div>
                        <div className='check'>
                                <p><span><BsCheck2Square/></span>Business ndisse suscipit sagittis leo.</p>
                                <p><span><BsCheck2Square/></span>We gives employer management</p>
                                <p><span><BsCheck2Square/></span>Media in this area of the solution.  </p>
                            </div>
                    </div>
                    <div className="text-right">
                        <h2 >Project job</h2>
                        <p >In handcraft job gives you as front adm in reviews.</p>
                    </div>
                </div>
                <hr/>
                <div className="profile">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <h2>Yusuf Iqbal</h2>
                            <p>Co-Founder</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About