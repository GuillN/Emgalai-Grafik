/* eslint-disable */
import React from "react"
import './about.css'
import logo from '../../images/emgalai-logo-NOIR.png'
import Footer from "../footer/footer"
import {useSpring, animated} from "react-spring"
import {MobileView, BrowserView} from "react-device-detect"
import Nav from "../nav/Nav";

const About = () => {

    const fade1 = useSpring({
        from: {opacity: 0}, opacity: 1,
        config: {duration: 500}
    })

    const fade2 = useSpring({
        from: {opacity: 0}, opacity: 1, delay: 500,
        config: {duration: 500}
    })

    const fade3 = useSpring({
        from: {opacity: 0}, opacity: 1, delay: 1000,
        config: {duration: 500}
    })

    return <div>
        <Nav print={false}/>
        <BrowserView>
            <div className="about-content">
                <animated.img style={fade1} src={logo} alt="logo"/>
                <animated.h1 style={fade2}>ëmgalaï grafik</animated.h1>
                <animated.p style={fade3}>Ëmgalaï is a graphic designer and illustrator based in Paris</animated.p>
                <animated.p style={fade3}>Ëmgalaï started in 2015, after joining Glazart and the Stoned Gatherings crew
                    in Paris to work on flyers and gig posters
                </animated.p>
                <animated.p style={fade3}>So far he worked with many stoner/doom/drone/metal bands like : Ulver, Venom,
                    Godflesh, King Dude, Magma,
                </animated.p>
                <animated.p style={fade3}>Boris, Kvelertak, My Sleeping Karma, Elder, Cough, Acid King...</animated.p>
            </div>
            <Footer/>
        </BrowserView>
        <MobileView>
            <div className="about-content-mobile">
                <animated.img style={fade1} src={logo} alt="logo"/>
                <animated.h1 style={fade2}>ëmgalaï grafik</animated.h1>
                <animated.p style={fade3}>Ëmgalaï is a graphic designer and illustrator based in Paris</animated.p>
                <animated.p style={fade3}>Ëmgalaï started in 2015, after joining Glazart and the Stoned Gatherings
                    crew in Paris to work on flyers and gig posters
                </animated.p>
                <animated.p style={fade3}>So far he worked with many stoner/doom/drone/metal bands like : Ulver,
                    Venom, Godflesh, King Dude, Magma, Boris, Kvelertak, My Sleeping Karma, Elder, Cough,
                    Acid King...
                </animated.p>
            </div>
        </MobileView>
    </div>
}

export default About
