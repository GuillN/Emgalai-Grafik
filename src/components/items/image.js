/* eslint-disable */
import React, {useState, useEffect} from "react"
import LazyLoad from "react-lazyload"
import placeholder from '../../images/placeholder.png'

const Image = props => {
    const [load, setLoad] = useState("loading")
    const [src, setSrc] = useState(placeholder)

    useEffect(() => {
        load === "loading" ? setSrc(placeholder) : setSrc(props.src)
    }, [load, props.src])

    const handleLoaded = () => {
        setLoad("loaded")
    }

    return <div>
        <LazyLoad once>
            <img style={load === "loaded" ? {} : {display: 'none'}} onLoad={handleLoaded} alt={props.alt}
                 src={src}
                 className={props.mobile ? "item-image-mobile" : props.popup ? "item-image-popup" : "item-image"}/>
        </LazyLoad>
    </div>
}

export default Image
