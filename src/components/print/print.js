/* eslint-disable */
import React from "react"
import Footer from "../footer/footer"
import "./print.css"
const logo = '/images/emgalaiprint SIMPLE logoBLANC.png'
const video = '/images/Animated Emgalai print logo.mp4'
import {animated, useSpring} from "react-spring"
import {Link} from "react-router-dom"
import {BrowserView, MobileView} from "react-device-detect"
import Nav from "../nav/Nav";

const Print = () => {

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    })

    const HOLD_BEFORE_END_SECONDS = 2

    const holdOnLastFrame = (video) => {
        const targetTime = Math.max(0, video.duration - HOLD_BEFORE_END_SECONDS)
        video.currentTime = targetTime
        video.pause()
    }

    const handleVideoTimeUpdate = (event) => {
        const vid = event.currentTarget
        if (!Number.isFinite(vid.duration)) return
        if (vid.currentTime >= vid.duration - HOLD_BEFORE_END_SECONDS) {
            holdOnLastFrame(vid)
        }
    }

    const handleVideoEnded = (event) => {
        holdOnLastFrame(event.currentTarget)
    }

    return <div>
        <BrowserView>
            <div className="print-page">
                <Nav print/>
                <div className="print-logo-video-wrap" aria-hidden="true">
                    <video className="print-logo-video" autoPlay muted playsInline preload="auto"
                           onTimeUpdate={handleVideoTimeUpdate} onEnded={handleVideoEnded}>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>

                <Footer/>
            </div>
        </BrowserView>
        <MobileView>
            <div className="print-page">
                <animated.header style={fade} className="header">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="logo" loading="eager" decoding="async" fetchPriority="high"/>
                    </Link>
                </animated.header>
                <animated.div style={fade} className="home-link-container">

                    <Link to="/print/about" className="home-link">ABOUT</Link>
                    <Link to="/print/devis" className="home-link">DEVIS</Link>

                    <hr className="line"/>

                    <Link to="/print/workshop" className="home-link">WORKSHOP</Link>
                    <Link to="/print/tshirts" className="home-link">TSHIRTS</Link>
                    <Link to="/print/lp" className="home-link">LP</Link>
                    <Link to="/print/cd" className="home-link">CD</Link>
                    <Link to="/print/tapes" className="home-link">TAPES</Link>
                    <Link to="/print/other" className="home-link">OTHER</Link>

                </animated.div>
                <Footer/>
            </div>
        </MobileView>
    </div>
}

export default Print
