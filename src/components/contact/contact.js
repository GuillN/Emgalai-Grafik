/* eslint-disable */
import React from "react"
import './contact.css'
import {BrowserView} from "react-device-detect"
import phone from '../../images/phone-icon.png'
import email from '../../images/email-icon.png'
import Footer from "../footer/footer"
import {useSpring, animated} from "react-spring"
import Form from "./form"
import Nav from "../nav/Nav";

const Contact = () => {

    const fade1 = useSpring({
        from: {opacity: 0}, opacity: 1,
        config: {duration: 500}
    })

    return <div>
        <Nav print={false}/>
        <div className="contact-content">
            <animated.div style={fade1} className="text">
                <h1>CONTACT ME</h1>
                <hr className="line"/>
                <h2>Ëmgalaï Grafik</h2>
                <div className="small-container">
                    <img src={email} alt="mail"/>
                    <p>emgalai.grafik@gmail.com</p>
                </div>
                <div className="small-container">
                    <img src={phone} alt="phone"/>
                    <p>06 25 66 84 63</p>
                </div>
            </animated.div>

            <Form/>
        </div>
        <BrowserView>
            <Footer/>
        </BrowserView>
    </div>
}

export default Contact
