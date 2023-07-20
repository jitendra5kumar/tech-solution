import React from 'react'
import { FaQuoteLeft } from "react-icons/fa"
import { BsCheck2Square } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa"
import ChooseBg from "../esset/choose-bg.png"
import Choose1 from "../esset/choose-1.jpg"
const Choose = () => {
    return (
        <>
            <div className="choose-section">
                <div className="choose-container1">
                    <div className="choose-content">
                        <h2>WHY CHOOSE US?</h2>
                        <h1>About Gives You Hand Best Such As Front Admin</h1>
                        <p>In job gives you handcrafted options such as front adm in reviews or email notifications. It also gives employer management fo apps ial media in area.</p>
                        <p className='choose-text'><FaQuoteLeft className='qt' /><i>There are many variations of passages of Fasts by injected humour, or randomised ere we must-have solution to satisfy most.</i></p>
                        <div className='choose-check'>
                            <p><span><BsCheck2Square /></span>Business ndisse suscipit sagittis leo.</p>
                            <p><span><BsCheck2Square /></span>We gives employer management</p>
                            <p><span><BsCheck2Square /></span>Media in this area of the solution.  </p>
                        </div>
                        <button>Read More <FaArrowRight className='arr'/></button>
                    </div>
                </div>
                <div className="choose-container2">
                    <img src={ChooseBg} alt="" className='choose-bg' />
                    <div className="choose-content1">
                        <img src={Choose1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choose