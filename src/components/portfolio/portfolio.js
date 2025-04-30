/* eslint-disable */
import React from "react"
import "./portfolio.css"
import { Carousel } from "react-responsive-carousel"
import { MobileView, BrowserView } from "react-device-detect"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import logo from "../../images/logo-whito.svg"
import CarouselPane from "./carouselPane"
import Footer from "../footer/footer"
import { animated, useSpring } from "react-spring"
import { Link } from "react-router-dom"
import Nav from "../nav/Nav"
import { portfolioVideos } from "../../helpers/videoConfig"

const Portfolio = () => {
    const fade = useSpring({
        from: { opacity: 0, }, opacity: 1
    })

    return <div>
        <BrowserView>
            <div className="background">
                <Nav print={false} />
                <Carousel 
                    autoPlay 
                    infiniteLoop 
                    interval={8000} 
                    stopOnHover={false} 
                    showStatus={false} 
                    showArrows={false}
                    className="video-carousel"
                >
                    {portfolioVideos.map((video, index) => (
                        <div key={index}>
                            <CarouselPane 
                                videoUrl={video.url} 
                                fallbackImage={video.fallbackImage}
                            />
                        </div>
                    ))}
                </Carousel>
                <Footer />
            </div>
        </BrowserView>

        <MobileView>
            <div style={{ backgroundColor: 'black', height: '100vh' }}>
                <animated.header style={fade} className="header">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </animated.header>
                <animated.div style={fade} className="home-link-container">

                    <Link to="/about" className="home-link">ABOUT</Link>
                    <Link to="/contact" className="home-link">CONTACT</Link>

                    <hr className="line" />

                    <Link to="/editions" className="home-link">EDITIONS</Link>
                    <Link to="/music" className="home-link">MUSIC</Link>
                    <Link to="/posters" className="home-link">GIG POSTERS</Link>
                    <Link to="/logos/all" className="home-link">LOGOS</Link>

                    <hr className="line" />

                    <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                        className="home-link">SHOP</a>
                </animated.div>
                <Footer />
            </div>
        </MobileView>
    </div>
}

export default Portfolio
