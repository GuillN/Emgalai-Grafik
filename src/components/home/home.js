/* eslint-disable */
import React, {useState} from 'react'
import './home.css'
import logo1 from '../../images/logo-whito.svg'
import logo2 from '../../images/emgalaiprint SIMPLE BLANClogo.svg'
import video from '../../images/Animated Emgalai print logo.mp4'
import barre from '../../images/barre centrale(1).png'
import {useSpring, animated} from 'react-spring'
import AnimatedLogo from "./animatedLogo/animatedLogo"
import ReactPlayer from "react-player";

// TODO refactor handlers
const Home = () => {
    const [isToggledLeft, setToggleLeft] = useState(false)
    const [isToggledRight, setToggleRight] = useState(false)
    const [hoverLeft, setHoverLeft] = useState(false)
    const [hoverRight, setHoverRight] = useState(false)

    const disappear = useSpring({
        display: isToggledRight || isToggledLeft ? 'none' : 'inline'
    })

    const disappearLeft = useSpring({
        display: isToggledRight ? 'none' : 'inline'
    })

    const disappearRight = useSpring({
        display: isToggledLeft ? 'none' : 'inline'
    })

    const barFade = useSpring({
        from: {opacity: 0}, opacity: 1,
        config: {duration: 700}
    })

    const handleHoverLeft = () => {
        setHoverLeft(true)
    }

    const handleLeaveLeft = () => {
        setHoverLeft(false)
    }

    const handleHoverRight = () => {
        setHoverRight(true)
    }

    const handleLeaveRight = () => {
        setHoverRight(false)
    }

    return <div>
        <animated.div className="home-container">
            <animated.div onClick={() => setToggleLeft(!isToggledLeft)}
                          style={disappearLeft} className="home-logo-container">
                <div className="logo-container" onMouseEnter={handleHoverLeft} onMouseLeave={handleLeaveLeft}>
                    {/*<ReactPlayer url={`https://www.youtube.com/watch?v=Pf_184uUPdg`}/>*/}
                    <AnimatedLogo hover={hoverLeft} logo={logo1} to={"/portfolio"}
                                  height={'50vh'} toHeight={'15vh'} margin={'0.5vh'}/>
                    <animated.p className="home-text" style={disappear}>
                        portfolio
                    </animated.p>
                </div>
            </animated.div>
            <animated.div style={disappear} className="bar-container">
                <animated.img style={barFade} src={barre} alt="separation" className="bar"/>
            </animated.div>
            <animated.div onClick={() => setToggleRight(!isToggledRight)}
                          style={disappearRight} className="home-logo-container">
                <div className="logo-container" onMouseEnter={handleHoverRight} onMouseLeave={handleLeaveRight}>
                    <AnimatedLogo hover={hoverRight} logo={logo2} to={"/print"} height={'50vh'} toHeight={'15vh'}
                                  margin={'-1.1vh'}/>
                    <animated.p className="home-text" style={disappear}>
                        workshop
                    </animated.p>
                </div>
            </animated.div>
        </animated.div>
    </div>
}

export default Home
