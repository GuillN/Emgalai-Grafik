/* eslint-disable */
import React, {useEffect, useState} from "react"
import {useSpring, animated} from "react-spring"
import {history} from "../../helpers/history"
import "./footer.css"

import twitterBlack from '../../images/twitter.svg'
import facebookBlack from '../../images/facebook.svg'
import instagramBlack from '../../images/instagram.svg'
import behanceBlack from '../../images/behance.svg'
import twitterWhite from '../../images/twitter-whito.svg'
import facebookWhite from '../../images/facebook-whito.svg'
import instagramWhite from '../../images/instagram-whito.svg'
import behanceWhite from '../../images/behance-whito.svg'

const Footer = () => {
    const [isWhite, setWhite] = useState(true)
    let twitter = isWhite ? twitterWhite : twitterBlack
    let facebook = isWhite ? facebookWhite : facebookBlack
    let instagram = isWhite ? instagramWhite : instagramBlack
    let behance = isWhite ? behanceWhite : behanceBlack

    useEffect(() => {
        const path = history.location.pathname
        setWhite(path === '/portfolio' || path === '/print')
    }, [])

    const fade = useSpring({
        from: {
            opacity: 0
        },
        opacity: 1
    })

    return <div className="footer">
            <animated.a style={fade} target="_blank" rel="noopener noreferrer"
                        href="https://twitter.com/EmgalaiGrafik">
                <img src={twitter} alt="twitter" className="img"/>
            </animated.a>
            <animated.a style={fade} target="_blank" rel="noopener noreferrer"
                        href="https://www.facebook.com/emgalai/">
                <img src={facebook} alt="facebook" className="img"/>
            </animated.a>
            <animated.a style={fade} target="_blank" rel="noopener noreferrer"
                        href="https://www.instagram.com/emgalai.grafik/">
                <img src={instagram} alt="instagram" className="img"/>
            </animated.a>
            <animated.a style={fade} target="_blank" rel="noopener noreferrer"
                        href="https://www.behance.net/Emgalai?tracking_source=search_projects_recommended%7Cemgalai">
                <img src={behance} alt="behance" className="img"/>
            </animated.a>
        </div>
}

export default Footer
