/* eslint-disable */
import React, {useEffect, useState} from "react"
import {useSpring, animated} from "react-spring"
import {history} from "../../helpers/history"
import "./footer.css"

const twitterBlack = '/images/twitter.svg'
const facebookBlack = '/images/facebook.svg'
const instagramBlack = '/images/instagram.svg'
const behanceBlack = '/images/behance.svg'
const twitterWhite = '/images/twitter-whito.svg'
const facebookWhite = '/images/facebook-whito.svg'
const instagramWhite = '/images/instagram-whito.svg'
const behanceWhite = '/images/behance-whito.svg'

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
                <img src={twitter} alt="twitter" className="img" loading="lazy" decoding="async" fetchPriority="low"/>
            </animated.a>
            <animated.a style={fade} target="_blank" rel="noopener noreferrer"
                        href="https://www.facebook.com/emgalai/">
                <img src={facebook} alt="facebook" className="img" loading="lazy" decoding="async" fetchPriority="low"/>
            </animated.a>
            <animated.a style={fade} target="_blank" rel="noopener noreferrer"
                        href="https://www.instagram.com/emgalai.grafik/">
                <img src={instagram} alt="instagram" className="img" loading="lazy" decoding="async" fetchPriority="low"/>
            </animated.a>
            <animated.a style={fade} target="_blank" rel="noopener noreferrer"
                        href="https://www.behance.net/Emgalai?tracking_source=search_projects_recommended%7Cemgalai">
                <img src={behance} alt="behance" className="img" loading="lazy" decoding="async" fetchPriority="low"/>
            </animated.a>
        </div>
}

export default Footer
