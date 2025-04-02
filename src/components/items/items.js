/* eslint-disable */
import React from 'react'
import {MobileView, BrowserView} from "react-device-detect"
import Image from "./image"
import './items.css'
import {animated, useSpring} from "react-spring"

// This component displays preview images from an image array
const Items = props => {
    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1,
        config: {duration: 1000}
    })

    return <div>
            <BrowserView>
                <animated.div style={fade} className="item-container">
                    <Image src={props.cover} alt={props.alt} mobile={false} popup={false}/>
                    <p className="item-text">{props.title}</p>
                </animated.div>
            </BrowserView>
            <MobileView>
                <div className="item-container">
                    <Image src={props.cover} alt={props.alt} mobile popup={false}/>
                    <p className="item-text">{props.title}</p>
                </div>
            </MobileView>
        </div>
}

export default Items
