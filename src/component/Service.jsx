import React from 'react'
import Service1 from "../esset/service-1.jpg"
import Service2 from "../esset/service-2.jpg"
import Service3 from "../esset/service-3.jpg"
import {TbSpeakerphone} from "react-icons/tb"
import {GiNetworkBars} from "react-icons/gi"
import {RiComputerLine} from "react-icons/ri"
const Service = () => {
    return (
        <>
            <div className="service-section">
                <div className="service-container">
                    <div className="service-content">
                        <h2>WHAT WE DO</h2>
                        <h1>We High Service That Stand</h1>
                    </div>
                    <div className="service-content2">
                        <div className="service-card">
                            <img src={Service1} alt="" />
                            <span className='service-icon'><TbSpeakerphone/></span>
                            <div>
                                <h2>Product To Setelite</h2>
                                <p>We job gives you handcrafted options such as front admin reviews or It also gives It business</p>
                                <h4>Read More +</h4>
                            </div>
                                <div className="service-shape">
                                    <span className="service-shape1"></span>
                                    <span className="service-shape2"></span>
                                </div>
                        </div>
                        <div className="service-card">
                            <img src={Service2} alt="" />
                            <span className='service-icon'><GiNetworkBars/></span>
                            <div>
                                <h2>Business For Network</h2>
                                <p>We job gives you handcrafted options such as front admin reviews or It also gives It business</p>
                                <h4>Read More +</h4>
                            </div>
                            <div className="service-shape">
                                    <span className="service-shape1"></span>
                                    <span className="service-shape2"></span>
                                </div>
                        </div>
                        <div className="service-card">
                            <img src={Service3} alt="" />
                            <span className='service-icon'><RiComputerLine/></span>
                            <div>
                                <h2>Computer Of Solution</h2>
                                <p>We job gives you handcrafted options such as front admin reviews or It also gives It business</p>
                                <h4>Read More +</h4>
                            </div>
                            <div className="service-shape">
                                    <span className="service-shape1"></span>
                                    <span className="service-shape2"></span>
                                </div>
                        </div>
                    </div>
                    <div className='service-title'>
                        <p className='service-title1'>Service : <span className='service-title2'>We best service it-solution for business.</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service