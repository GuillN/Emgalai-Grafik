/* eslint-disable */
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import {dropUrls} from "../../helpers/urlGroups";

const NavDropLink = props => {
    const [isWhite] = useState(props.isWhite)
    const [text] = useState(props.text)
    const [links, setLinks] = useState([])
    const [drop, setDrop] = useState(false)

    useEffect(() => {
        setLinks(dropUrls.find(e => e.title === text).links)
    }, [text])

    const color = {
        color: isWhite ? 'white' : 'black'
    }

    const boldColor = {
        color: isWhite ? 'white' : 'black',
        fontWeight: 'bolder'
    }

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    })

    const subFade = useSpring({
        opacity: drop ? 1 : 0,
        marginTop: drop ? 0 : -10
    })

    const sublinks = links.map(link => {
        if (text === 'works'  || text === 'prints') {
            return <Link to={link.url} className="sub-link" style={color}>
                {link.text}
            </Link>
        } else {
            return <a target="_blank" rel="noopener noreferrer" href={link.url} className="sub-link" style={color}>
                {link.text}
            </a>
        }
    })

    return <animated.div className="nav-link-container" style={fade} onMouseLeave={() => {
        setTimeout(()=>setDrop(false),1500);
    }}>
        <div className="nav-link" style={text === 'works' || text === 'prints' ? boldColor : color}
             onMouseEnter={() => {
                 setDrop(true)
             }}>{text.toUpperCase()}</div>

        <animated.div className={`sub-links-${text}`} style={subFade}>
            {sublinks}
        </animated.div>
    </animated.div>
}

export default NavDropLink
