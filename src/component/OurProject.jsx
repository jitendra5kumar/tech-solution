import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import Project1 from "../esset/project-1.jpg"
import Project2 from "../esset/project-2.jpg"
import Project3 from "../esset/project-3.jpg"
import Project4 from "../esset/project-4.jpg"
import { Link } from 'react-router-dom';

const OurProject = () => {
    return (
        <>
            <div className="ourp-section">
                <h2>OUR PROJECT</h2>
                <h1>We Case Studies Best Work</h1>
                <div className="ourp-container">
                    {/* <!-- Swiper --> */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        // loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={Project1} alt="" />
                            <div className="project-content">
                                <div className="project-content-info">
                                    <h4 className="project-content-title"><Link to="/project">Business Network</Link></h4>
                                    <span>Design / Business</span>
                                </div>
                                <div className="project-content-btn">
                                    <Link to="/project"><i className="fas fa-chevron-circle-right" /></Link>
                                </div>
                                <div>
                                    <span className="project-shape-1 project-shape" />
                                    <span className="project-shape-2 project-shape" />
                                </div>

                            </div>

                        </SwiperSlide>
                        <SwiperSlide><img src={Project2} alt="" />
                        <div className="project-content">
                                <div className="project-content-info">
                                    <h4 className="project-content-title"><Link to="/project">Business Network</Link></h4>
                                    <span>Design / Business</span>
                                </div>
                                <div className="project-content-btn">
                                    <Link to="/project"><i className="fas fa-chevron-circle-right" /></Link>
                                </div>
                                <div>
                                    <span className="project-shape-1 project-shape" />
                                    <span className="project-shape-2 project-shape" />
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide><img src={Project3} alt="" />
                        <div className="project-content">
                                <div className="project-content-info">
                                    <h4 className="project-content-title"><Link to="/project">Business Network</Link></h4>
                                    <span>Design / Business</span>
                                </div>
                                <div className="project-content-btn">
                                    <Link to="/project"><i className="fas fa-chevron-circle-right" /></Link>
                                </div>
                                <div>
                                    <span className="project-shape-1 project-shape" />
                                    <span className="project-shape-2 project-shape" />
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slider'><img src={Project4} alt="" />
                        <div className="project-content">
                                <div className="project-content-info">
                                    <h4 className="project-content-title"><Link to="/project">Business Network</Link></h4>
                                    <span>Design / Business</span>
                                </div>
                                <div className="project-content-btn">
                                    <Link to="/project"><i className="fas fa-chevron-circle-right" /></Link>
                                </div>
                                <div>
                                    <span className="project-shape-1 project-shape" />
                                    <span className="project-shape-2 project-shape" />
                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div >
        </>
    )
}

export default OurProject