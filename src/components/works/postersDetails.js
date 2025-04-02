import React, {useEffect, useState} from 'react'
/* eslint-disable */
import {BrowserView, MobileView} from "react-device-detect"
import {Carousel} from "react-responsive-carousel"
import {animated, useSpring} from "react-spring"
import {posters} from '../../helpers/images'
import Nav from "../nav/Nav";

// TODO carousel component
const PostersDetails = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(posters)
    }, [])

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1,
        config: {duration: 1000}
    })

    const mapper = (item, index) => {
        return <animated.div style={fade} key={index} className="details-frame-big">
            <img alt={index} src={images[index]}/>
        </animated.div>
    }

    let img = images.map(mapper)

    return <div>
        <Nav/>
        <div style={{backgroundColor: 'black'}} className="details-container">
            <h1 style={{color: 'white'}}>POSTERS</h1>
            <div className="details-grid">
                <BrowserView>
                    <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false} className="works-carousel">
                        {img}
                    </Carousel>
                </BrowserView>
                <MobileView>
                    <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false}
                              className="works-carousel-mobile">
                        {img}
                    </Carousel>
                </MobileView>
            </div>
        </div>
    </div>
}

export default PostersDetails
