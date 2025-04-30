/* eslint-disable */
import React, {useState, useEffect} from "react"
import {MobileView, BrowserView} from "react-device-detect"
import back from "../../images/back.svg"
import next from "../../images/next.svg"
import Popup from "reactjs-popup"
import Image from "./image"
import {useHover} from '../../helpers/HoverContext'
import { history } from "../../helpers/history";

const PopupImage = props => {
    const [modalIndex, setModalIndex] = useState(0)
    const [isLogosPage, setIsLogosPage] = useState(false)
    const { setHoveredImage } = useHover();

    // Check if we're on the logos page
    useEffect(() => {
        const pathName = history.location.pathname.split('/')[1];
        setIsLogosPage(pathName === 'logos');
    }, []);

    // Function to sanitize image URLs with special characters
    const sanitizeImageUrl = (url) => {
        if (typeof url !== 'string') {
            return url;
        }
        
        if (url.includes('(') || url.includes(')')) {
            return url.replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        
        return url;
    };

    const init = index => {
        setModalIndex(index);
        // Make sure the background remains when opening modal
        // Only set background if not on logos page
        if (!isLogosPage) {
            setHoveredImage(sanitizeImageUrl(props.item));
        }
    }

    const increment = () => {
        const newIndex = modalIndex + 1;
        setModalIndex(newIndex);
        if (!isLogosPage && props.images && props.images[newIndex]) {
            setHoveredImage(sanitizeImageUrl(props.images[newIndex]));
        }
    }

    const decrement = () => {
        const newIndex = modalIndex - 1;
        setModalIndex(newIndex);
        if (!isLogosPage && props.images && props.images[newIndex]) {
            setHoveredImage(sanitizeImageUrl(props.images[newIndex]));
        }
    }

    return <div>
        <BrowserView>
            <Popup trigger={
                <div>
                    <Image alt={props.index} src={props.item} mobile={false} popup/>
                </div>
            } modal closeOnEscape onOpen={() => init(props.index)}>
                <div className="modal-container">
                    {modalIndex === 0 ? <div className="left-arrow"/> :
                        <img src={back} alt="back" className="left-arrow" onClick={decrement}/>}
                    <div className="modal">
                        <img alt={modalIndex} src={props.images[modalIndex]} className="modal-image"/>
                    </div>
                    {modalIndex === props.sizes - 1 ? <div className="right-arrow"/> :
                        <img src={next} alt="next" className="right-arrow" onClick={increment}/>}
                </div>
            </Popup>
        </BrowserView>
        <MobileView>
            <Image src={props.item} alt={props.index} mobile={false} popup/>
        </MobileView>
    </div>
}

export default PopupImage
