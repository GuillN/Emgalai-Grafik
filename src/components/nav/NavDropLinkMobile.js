/* eslint-disable */
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import {dropUrls} from "../../helpers/urlGroups";

const NavDropLinkMobile = props => {
    const [isWhite] = useState(props.isWhite)
    const [text] = useState(props.text)
    const [links, setLinks] = useState([])

    useEffect(() => {
        setLinks(dropUrls.find(e => e.title === text).links)
    }, [text])

    const color = {
        color: isWhite ? 'white' : 'black'
    }

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    })

    const sublinks = links.map(link => {
        
            return <Link to={link.url} className="sub-link" style={color}>
                {link.mobileText}
            </Link>

    })

    return <animated.div className="nav-link-container" style={fade}>
        <animated.div className="sub-links">
            {sublinks}
        </animated.div>
    </animated.div>
}

export default NavDropLinkMobile
