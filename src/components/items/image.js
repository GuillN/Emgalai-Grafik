/* eslint-disable */
import React, {useState, useEffect} from "react"
const placeholder = '/images/placeholder.png'
import {useHover} from '../../helpers/HoverContext'

const Image = props => {
    const [src, setSrc] = useState(props.src || placeholder)
    const [isHovered, setIsHovered] = useState(false)
    const { setHoveredImage } = useHover()

    useEffect(() => {
        setSrc(props.src || placeholder)
    }, [props.src])

    // Special function to handle problematic filenames
    const sanitizeImageUrl = (url) => {
        // Check if this is a string (URL) or an object (already loaded image)
        if (typeof url !== 'string') {
            return url;
        }
        
        // If it contains parentheses or other problematic characters
        if (url.includes('(') || url.includes(')')) {
            // For browser background-image CSS, we need to escape the parentheses
            return url.replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        
        return url;
    };

    // Direct DOM event handlers
    function mouseEnterHandler(e) {
        if (props.popup) return;
        setIsHovered(true);
        // Use the sanitized URL for the background
        setHoveredImage(sanitizeImageUrl(props.src));
    }

    function mouseLeaveHandler(e) {
        if (props.popup) return;
        setIsHovered(false);
        // Do not clear background image
    }

    // Simple hover style
    const hoverStyle = isHovered && !props.popup ? {
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        cursor: 'pointer'
    } : {
        transform: 'scale(1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
    }

    return (
        <div className="image-container" style={{ position: 'relative' }}>
            <img 
                style={{
                    ...hoverStyle
                }}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                onError={() => {
                    if (src !== placeholder) {
                        setSrc(placeholder)
                    }
                }}
                alt={props.alt}
                src={src}
                loading={props.popup ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={props.popup ? "high" : "low"}
                className={props.mobile ? "item-image-mobile" : props.popup ? "item-image-popup" : "item-image"}
            />
        </div>
    )
}

export default Image
