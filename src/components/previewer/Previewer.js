/* eslint-disable */
import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import {
    editionArray,
    musicArray,
    albumArray,
    merchArray,
    packagingArray,
    visuIdArray,
    posterArray,
    tshirtArray,
    cassetteArray,
    vinylArray,
    cdArray,
    othersArray} from "../../helpers/imageArrays"
import Items from "../items/items";
import {history} from "../../helpers/history";
import './Previewer.css'
import Nav from "../nav/Nav";

// TODO refactor css
// Displays previews
const Previewer = props => {

    const [url, setUrl] = useState('')
    const [array, setArray] = useState({})
    const [isPrint, setIsPrint] = useState(false)

    useEffect(() => {
        const path = history.location.pathname;
        switch (path) {
            case '/editions':
                setUrl('editions')
                setArray(editionArray)
                setIsPrint(false)
                break
            case '/music':
                setUrl('music')
                setArray(musicArray)
                setIsPrint(false)
                break
            case '/albums':
                setUrl('albums')
                setArray(albumArray)
                setIsPrint(false)
                break
            case '/merch':
                setUrl('merch')
                setArray(merchArray)
                setIsPrint(false)
                break
            case '/packaging':
                setUrl('packaging')
                setArray(packagingArray)
                setIsPrint(false)
                break
            case '/visual-identity':
                setUrl('visual-identity')
                setArray(visuIdArray)
                setIsPrint(false)
                break
            case '/posters':
                setUrl('posters')
                setArray(posterArray)
                setIsPrint(false)
                break
            /*case '/works':
                setUrl('works')
                setArray(workArray)
                setIsPrint(false)
                break*/
            
            // case '/prints':
            //     console.log('Previewer - Prints')
            //     setUrl('prints')
            //     setArray(workshopArray)
            //     setIsPrint(true)
            //     console.log(`State: url: ${url}, array: ${array}, isPrint: ${isPrint}`)
            //     break
            case '/print/tshirts':
                setUrl('print/tshirts')
                setArray(tshirtArray)
                setIsPrint(true)
                break
            case '/print/vinyls':
                setUrl('print/vinyls')
                setArray(vinylArray)
                setIsPrint(true)
                break
            case '/print/cd':
                setUrl('print/cd')
                setArray(cdArray)
                setIsPrint(true)
                break
            case '/print/cassettes':
                setUrl('print/cassettes')
                setArray(cassetteArray)
                setIsPrint(true)
                break
            case '/print/divers':
                setUrl('print/divers')
                setArray(othersArray)
                setIsPrint(true)
                break
            

            default:
                break
        }
    }, [array, isPrint, url])

    const previews = Object.keys(array).map((previewKey, index) => {
        let destination
        //Redirects to tshirts when on prints/0
        //if (url === 'prints' && index === 0) destination = '/tshirts'
        destination = `/${url}/${index}`
        const preview = array[previewKey]
        return <Link to={destination}>
            <Items cover={preview.cover} alt={`${preview.title}_img`} title={preview.title}/>
        </Link>
    })

    return <div>
        <Nav print={isPrint}/>
        <div className="preview-container">
            {previews}
        </div>
    </div>
}

export default Previewer;
