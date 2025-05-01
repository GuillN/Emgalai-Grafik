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
        
        // Simple replacement for parentheses and other problematic characters
        let result = url;
        result = result.replace(/\(/g, '%28');
        result = result.replace(/\)/g, '%29');
        result = result.replace(/ /g, '%20');
        result = result.replace(/#/g, '%23');
        result = result.replace(/&/g, '%26');
        
        return result;
    };

    const init = index => {
        // Ensure index is valid
        if (typeof index === 'number' && index >= 0) {
            setModalIndex(index);
            // Make sure the background remains when opening modal
            // Only set background if not on logos page
            if (!isLogosPage && props.item) {
                try {
                    setHoveredImage(sanitizeImageUrl(props.item));
                } catch (e) {
                    console.error("Error in init:", e);
                }
            }
        }
        
        // Hide the details container when popup is open
        const detailsContainer = document.querySelector('.details-container');
        if (detailsContainer) {
            detailsContainer.style.display = 'none';
        }
        
        // Hide the navigation elements when popup is open
        const navSection = document.querySelector('section.nav');
        if (navSection) {
            navSection.style.display = 'none';
        }
        
        const header = document.querySelector('header.header');
        if (header) {
            header.style.display = 'none';
        }
    }

    const increment = () => {
        const newIndex = modalIndex + 1;
        // Only update if the new index is valid
        if (props.images && newIndex < props.images.length) {
            setModalIndex(newIndex);
            if (!isLogosPage && props.images[newIndex]) {
                try {
                    setHoveredImage(sanitizeImageUrl(props.images[newIndex]));
                } catch (e) {
                    console.error("Error in increment:", e);
                }
            }
        }
    }

    const decrement = () => {
        const newIndex = modalIndex - 1;
        // Only update if the new index is valid
        if (newIndex >= 0 && props.images) {
            setModalIndex(newIndex);
            if (!isLogosPage && props.images[newIndex]) {
                try {
                    setHoveredImage(sanitizeImageUrl(props.images[newIndex]));
                } catch (e) {
                    console.error("Error in decrement:", e);
                }
            }
        }
    }
    
    const handleClose = () => {
        // Show the details container when popup is closed
        const detailsContainer = document.querySelector('.details-container');
        if (detailsContainer) {
            detailsContainer.style.display = 'flex';
        }
        
        // Show the navigation elements when popup is closed
        const navSection = document.querySelector('section.nav');
        if (navSection) {
            navSection.style.display = 'flex';
        }
        
        const header = document.querySelector('header.header');
        if (header) {
            header.style.display = 'block';
        }
    }

    return <div>
        <BrowserView>
            <Popup 
                trigger={
                    <div>
                        <Image alt={props.index} src={props.item} mobile={false} popup/>
                    </div>
                } 
                modal 
                closeOnEscape 
                onOpen={() => init(props.index)}
                onClose={handleClose}
            >
                {close => (
                <div className="modal-container">
                    <div className="close-button" onClick={close}>✕</div>
                    {modalIndex === 0 ? <div className="left-arrow"/> :
                        <img src={back} alt="back" className="left-arrow" onClick={decrement}/>}
                    <div className="modal">
                        {props.images && props.images[modalIndex] ? 
                            <img alt={modalIndex} src={props.images[modalIndex]} className="modal-image"/> : 
                            <div className="error-message">Image not available</div>
                        }
                    </div>
                    {modalIndex === (props.sizes ? props.sizes - 1 : 0) ? <div className="right-arrow"/> :
                        <img src={next} alt="next" className="right-arrow" onClick={increment}/>}
                </div>
                )}
            </Popup>
        </BrowserView>
        <MobileView>
            <Image src={props.item} alt={props.index} mobile={false} popup/>
        </MobileView>
    </div>
}

export default PopupImage
