import React from 'react'
import Contactbg from "../esset/contact.jpg"
import Contactmap from "../esset/contact-map.png"
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { FaMapMarkerAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <div className="contact-container">
                    <div className="contact-content1">
                        <h2>CONTACT NOW</h2>
                        <h1>Live Sports This Contacts Us</h1>
                        <p>Promote your blog posts, case udie, and product ouncems
                            with the the branded videoscustomers coming back for
                            services Makes best effort.</p>
                        <form action="">
                            <div className="contact-detail">
                                <input type="text" placeholder='Your Name' />
                                <input type="text" placeholder='Your Email' />
                            </div>
                            <textarea name="" id="" cols="87" rows="8" placeholder='Message'></textarea> <br />
                            <button className='con-btn'>Send request</button>
                        </form>
                    </div>
                    <div className="contact-content2">
                        <div className="contact-info">
                            <img src={Contactbg} alt="Not Found" className="ns-contact-bg-img" />
                            <img className='con-map' src={Contactmap} alt="Not Found" />
                            <div className="contact-items">


                                <div className="contact-item  phone">
                                    <p className="con-icon">
                                        <IoCall />
                                    </p>
                                    <div className="contact-item-details">
                                        <span>Call Me</span>
                                        <div>
                                            <Link href="tel:+918474986168">+91 8474986168</Link>
                                            <Link href="tel:+918474986168">+91 8474986168</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-item mail">
                                    <p className="con-icon">
                                        <MdEmail />
                                    </p>
                                    <div className="contact-item-details">
                                        <span>Mail Us</span>
                                        <div>
                                            <Link href="mailto:rubel@eobi.com
                                              ">rubel@eobi.com
                                            </Link>
                                            <Link href="mailto:moraty@bara.com
                                              ">moraty@bara.com
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-item address">
                                    <p className="con-icon">
                                        <FaMapMarkerAlt/>
                                    </p>
                                    <div className="contact-item-details">
                                        <span>Address</span>
                                        <p>20, 25 Dhaka,0123 <br />
                                            Ratrba baraj,20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact