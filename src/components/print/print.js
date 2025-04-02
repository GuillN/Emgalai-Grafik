/* eslint-disable */
import React from "react"
import Footer from "../footer/footer"
import logo from "../../images/emgalaiprint SIMPLE logoBLANC.png"
import {animated, useSpring} from "react-spring"
import {Link} from "react-router-dom"
import {BrowserView, MobileView} from "react-device-detect"
import Nav from "../nav/Nav";

const Print = () => {

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    })

    return <div>
        <BrowserView>
            <div style={{backgroundColor: 'black', height: '100vh'}}>
                <Nav print/>

                <Footer/>
            </div>
        </BrowserView>
        <MobileView>
            <div style={{backgroundColor: 'black', height: '100vh'}}>
                <animated.header style={fade} className="header">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="logo"/>
                    </Link>
                </animated.header>
                <animated.div style={fade} className="home-link-container">

                    <Link to="/print/about" className="home-link">ABOUT</Link>
                    <Link to="/print/devis" className="home-link">DEVIS</Link>

                    <hr className="line"/>

                    <Link to="/print/tshirts" className="home-link">TSHIRTS</Link>
                    <Link to="/print/vinyls" className="home-link">VINYLS</Link>
                    <Link to="/print/cd" className="home-link">CD</Link>
                    <Link to="/print/cassettes" className="home-link">CASSETTES</Link>
                    <Link to="/print/posters" className="home-link">POSTERS</Link>
                    <Link to="/print/divers" className="home-link">DIVERS</Link>

                </animated.div>
                <Footer/>
            </div>
        </MobileView>
    </div>
}

export default Print
