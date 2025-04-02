/* eslint-disable */
import React, {useState} from "react"
import {MobileView, BrowserView} from "react-device-detect"

import back from "../../images/back.svg"
import next from "../../images/next.svg"
import Popup from "reactjs-popup"
import Image from "./image"

const PopupImage = props => {
    const [modalIndex, setModalIndex] = useState(0)

    const init = index => setModalIndex(index)

    const increment = () => setModalIndex(modalIndex + 1)

    const decrement = () => setModalIndex(modalIndex - 1)

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
