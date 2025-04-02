/* eslint-disable */
import React, {useState} from "react"
import {Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring';


const NavLink = props => {
    const [isWhite] = useState(props.isWhite)
    const [text] = useState(props.text)
    const [url] = useState(props.url)

    const color = {
        color: isWhite ? 'white' : 'black'
    }

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    })

    return <animated.div className="nav-link-container" style={fade}>
        <Link to={`${url}`} style={color} className="nav-link">{text.toUpperCase()}</Link>
    </animated.div>
}

export default NavLink
