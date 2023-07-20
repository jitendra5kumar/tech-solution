import React from 'react'
import FeatureBg from "../../esset/feature-bg-1.jpg"
import {FaNetworkWired} from "react-icons/fa"
import {MdConnectedTv} from "react-icons/md"
import {GiNetworkBars} from "react-icons/gi"
import {BsBroadcastPin} from "react-icons/bs"

const Feature = () => {
    return (
        <>
            <div className="feature-container">
                <div className="feature-content">
                    <p>BEST FEATURE</p>
                    <h2>We Are Business Features</h2>
                </div>
                <div className="feature-content1">
                    <div className="feature-box">
                        <img src={FeatureBg} alt="" />
                        <h2>Business Network</h2>
                        <p>Nullam vitae tempor molestie exthe.</p>
                        <div className="icon">

                        <FaNetworkWired />
                        </div>
                    </div>
                    <div className="feature-box">
                        <img src={FeatureBg} alt="" />
                        <h2>60 For Mobiles</h2>
                        <p>Nullam vitae tempor molestie exthe.</p>
                        <div className="icon">

                        <MdConnectedTv/>
                        </div>
                    </div>
                    <div className="feature-box">
                        <img src={FeatureBg} alt="" />
                        <h2>Line Streaming</h2>
                        <p>Nullam vitae tempor molestie exthe.</p>
                        <div className="icon">

                        <GiNetworkBars/>
                        </div>
                    </div>
                    <div className="feature-box">
                        <img src={FeatureBg} alt="" />
                        <h2>Fiber Broads</h2>
                        <p>Nullam vitae tempor molestie exthe.</p>
                        <div className="icon">

                        <BsBroadcastPin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature