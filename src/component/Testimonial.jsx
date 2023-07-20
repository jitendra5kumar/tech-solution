import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import TestImg from "../esset/testimonial-1.png"

import {FaQuoteRight} from "react-icons/fa"
const Testimonial = () => {
    return (
        <>
            <div className="testim-section">
                <Swiper
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}

                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className="testim-container">
                            <div className="testim-img">

                            <img src={TestImg} alt="" />
                            </div>
                            <div className="testim-content">
                                <p className='testim-icon'><FaQuoteRight/></p>
                                <h2 className="testim-test">We understand the important of to approaching
                                    work integrallysand believe in the power simple
                                    and we easy cation growth always act like
                                    adipisicing elit, sed do eiusmod.

                                    </h2>
                                <p className="testim-name">Romes Barson</p>
                                <p className="testim-p">Manager</p>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="testim-container">
                            <div className="testim-img">

                            <img src={TestImg} alt="" />
                            </div>
                            <div className="testim-content">
                                <p className='testim-icon'><FaQuoteRight/></p>
                                <h2 className="testim-test">We understand the important of to approaching
                                    work integrallysand believe in the power simple
                                    and we easy cation growth always act like
                                    adipisicing elit, sed do eiusmod.

                                    </h2>
                                <p className="testim-name">Romes Barson</p>
                                <p className="testim-p">Manager</p>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="testim-container">
                            <div className="testim-img">
                            <img src={TestImg} alt=""/>
                            </div>
                            <div className="testim-content">
                                <p className='testim-icon'><FaQuoteRight/></p>
                                <h2 className="testim-test">We understand the important of to approaching
                                    work integrallysand believe in the power simple
                                    and we easy cation growth always act like
                                    adipisicing elit, sed do eiusmod.

                                    </h2>
                                <p className="testim-name">Romes Barson</p>
                                <p className="testim-p">Manager</p>

                            </div>
                        </div>
                    </SwiperSlide>




                </Swiper>
            </div>
        </>
    )
}

export default Testimonial