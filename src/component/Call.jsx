import React from 'react'
import Shape2 from "../esset/shape-21.png"
import Playbg from "../esset/cta-play-bg.png"
import Play from "../esset/play-btn.png"
import MapBg from "../esset/cta-map.png"
import { FaArrowRight } from "react-icons/fa"
const Call = () => {
    return (
        <>
            <div className="call-section">
                <span class="call-shape-1"></span>
                <span class="call-shape-2"><img src={Shape2} alt="Not Found" /></span>
                <div class="call-play-btn">
                    <img class="play-bg" src={Playbg} alt="Not Found" />
                    <img class="ns-btn-img" src={Play} alt="Not Found" />

                </div>
                <img class="call-map" src={MapBg} alt="Not Found" />
                <div className="call-container">
                    
                            <div class="call-content">
                                <span class="call-subtitle">Call To Action</span>
                                <h2 class="call-title">Contact Some Easy To Steps</h2>
                                <span class="call-contact">Get Your Quote or Call: + 8474986168</span>
                              <button className='call-btn'>Read More <FaArrowRight className='arr'/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Call