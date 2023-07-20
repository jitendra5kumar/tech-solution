import React from 'react'
import FooterShap from "../esset/footer-shape-1.png"
import FooterMap from "../esset/footer-map.png"
import { Link } from "react-router-dom"
import Logo from "../esset/logo.png"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { LiaBehance } from "react-icons/lia"
import Post1 from "../esset/post-1.png"
import Post2 from "../esset/post-2.png"
const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <img src={FooterShap} alt="Not Found" className="footer-shape " />
                <img src={FooterMap} alt="Not Found" className="footer-map " />

                <div className="footer-container">

                    <div className="footer-content">
                        <div className="footer-logo">
                            <Link to="/"><img src={Logo} alt="Not Found" /></Link>
                        </div>
                        <p className="footer-text">Nemo enim ipsam voluptate quia
                            voluptas sit aspernatur aut odit
                            aut fugit, sed quia magni this
                            dolores eos qui ratione .</p>
                        <div className="footer-social">
                            <Link className='i'><FaFacebookF /></Link>
                            <Link className='i'><BsTwitter /></Link>
                            <Link className='i'><FaLinkedinIn /></Link>
                            <Link className='i'><LiaBehance /></Link>
                        </div>

                    </div>
                    <div className="footer-content">
                        <h3 className="footer-title">Quick Links</h3>
                        <div className="footer-list">
                            <ul>
                                <li><Link >- Best Services</Link></li>
                                <li><Link >- Department</Link></li>
                                <li><Link >- About Our Company</Link></li>
                                <li><Link >- Business Contact</Link></li>
                                <li><Link >- Make An Appointment</Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className="footer-content">
                        <h3 className="footer-title">Our Contacts</h3>
                        <div className="footer-contact">
                            <p>Adress: 27 Division St, Berakuti, <br />
                                NY 121102, USA</p>
                            <div className="footer-contact-info">
                                <span>Phone:<Link href="tel:+81440456782">+8 1440 456 782</Link></span>
                                <span>Fax:<Link href="tel:+8846512456788">+8 846512 456 788</Link></span>
                            </div>
                            <div className="footer-contact-info">
                                <span>Email:<Link href="mailto:example@mail.com">Email: example@mail.com</Link></span>
                                <span>Website:<Link >yourwebsite.com</Link></span>
                            </div>
                        </div>

                    </div>
                    <div className="footer-content">
                        <h3 className="footer-title">Recent Post</h3>
                        <div className="footer-post">
                            <div className="footer-post-img">
                                <Link ><img src={Post1} alt="Not Found" /></Link>
                            </div>
                            <div className="footer-post-content">
                                <span>23 jun 2023</span>
                                <h5 className="footer-post-title"><Link >Get around easily
                                    york service</Link></h5>
                            </div>
                        </div>
                        <div className="footer-post">
                            <div className="footer-post-img">
                                <Link ><img src={Post2} alt="Not Found" /></Link>
                            </div>
                            <div className="footer-post-content">
                                <span>23 jun 2023</span>
                                <h5 className="footer-post-title"><Link >Get around easily
                                    york service</Link></h5>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="footer-copyright">
                    <div className="row">
                            <div className="footer-copyright-text">
                                <p>Copyright ©<span>Nosei</span> all rights reserved.</p>
                            </div>
                            <div className="footer-copyright-menu">
                                <ul>
                                    <li><Link to="/">Privacy</Link></li>
                                    <li><Link to="/">Policy</Link></li>
                                    <li><Link to="/">About</Link></li>
                                </ul>
                            </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer