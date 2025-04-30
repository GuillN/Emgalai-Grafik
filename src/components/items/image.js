/* eslint-disable */
import React, {useState, useEffect} from "react"
import LazyLoad from "react-lazyload"
import placeholder from '../../images/placeholder.png'

const Image = props => {
    const [load, setLoad] = useState("loading")
    const [src, setSrc] = useState(placeholder)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        load === "loading" ? setSrc(placeholder) : setSrc(props.src)
    }, [load, props.src])

    const handleLoaded = () => {
        setLoad("loaded")
    }

    const hoverStyle = isHovered && !props.popup ? {
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
    } : {
        transform: 'scale(1)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 0 0 rgba(0,0,0,0)'
    }

    return <div>
        <LazyLoad once>
            <img 
                style={{
                    ...(load === "loaded" ? {} : {display: 'none'}),
                    ...hoverStyle
                }} 
                onLoad={handleLoaded} 
                alt={props.alt}
                src={src}
                className={props.mobile ? "item-image-mobile" : props.popup ? "item-image-popup" : "item-image"}
                onMouseEnter={() => !props.popup && setIsHovered(true)}
                onMouseLeave={() => !props.popup && setIsHovered(false)}
            />
        </LazyLoad>
    </div>
}

export default Image
