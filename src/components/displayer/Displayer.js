/* eslint-disable */
import React, {useEffect, useState} from 'react'
import {animated, useSpring} from "react-spring";
import PopupImage from "../items/popupImage";
import Media from "./Media"
import {MobileView, BrowserView} from "react-device-detect"
import {
  editionArray,
  musicArray,
  albumArray,
  merchArray,
  packagingArray,
  visuIdArray,
  posterArray,
  logoArray,
  tshirtArray,
  cassetteArray,
  vinylArray,
  cdArray,
  othersArray
} from "../../helpers/imageArrays";
import {history} from "../../helpers/history";
import './Displayer.css'
import Nav from "../nav/Nav";

// TODO refactor css
// This component displays formatted popup images from an image array
const Displayer = props => {

    const [id] = useState(props.match.params.id)
    const [pathName] = useState(history.location.pathname.split('/')[history.location.pathname.split('/').length - 2])
    const [client, setClient] = useState({})
    const [images, setImages] = useState([])
    const [videos, setVideos] = useState([])
    const [imageIndex, setImageIndex] = useState([])
    const [isPrint, setIsPrint] = useState(false)

    useEffect(() => {
        switch (pathName) {
          case 'editions':
            setClient(editionArray[id])
            setImages(editionArray[id].images)
            setVideos(editionArray[id].videos)
            setImageIndex(editionArray[id].imageIndex)
            break
          case 'music':
            setClient(musicArray[id])
            setImages(musicArray[id].images)
            setVideos(musicArray[id].videos)
            setImageIndex(musicArray[id].imageIndex)
            break
          case 'albums':
            setClient(albumArray[id])
            setImages(albumArray[id].images)
            setVideos(albumArray[id].videos)
            setImageIndex(albumArray[id].imageIndex)
            break
          case 'merch':
            setClient(merchArray[id])
            setImages(merchArray[id].images)
            setVideos(merchArray[id].videos)
            setImageIndex(merchArray[id].imageIndex)
            break
          case 'packaging':
            setClient(packagingArray[id])
            setImages(packagingArray[id].images)
            setVideos(packagingArray[id].videos)
            setImageIndex(packagingArray[id].imageIndex)
            break
          case 'visual-identity':
            setClient(visuIdArray[id])
            setImages(visuIdArray[id].images)
            setVideos(visuIdArray[id].videos)
            setImageIndex(visuIdArray[id].imageIndex)
            break
          case 'posters':
            setClient(posterArray[id])
            setImages(posterArray[id].images)
            setVideos(posterArray[id].videos)
            setImageIndex(posterArray[id].imageIndex)
            break
          // case 'works':
          //     setClient(workArray[id])
          //     setImages(workArray[id].images)
          //     setVideos(workArray[id].videos)
          //     setImageIndex(workArray[id].imageIndex)
          //     break
          // case 'music':
          //     setClient(musicArray[id])
          //     setImages(musicArray[id].images)
          //     setVideos(musicArray[id].videos)
          //     setImageIndex(musicArray[id].imageIndex)
          //     break
          case 'logos':
              setClient(logoArray)
              setImages(logoArray.images)
              setVideos(logoArray.videos)
              setImageIndex(logoArray.imageIndex)
              break
            // case 'prints':
            //     setClient(workshopArray[id])
            //     setImages(workshopArray[id].images)
            //     setIsPrint(true)
            //     break
            case 'tshirts':
                setClient(tshirtArray[id])
                setImages(tshirtArray[id].images)
                setVideos(tshirtArray[id].videos)
                setImageIndex(tshirtArray[id].imageIndex)
                setIsPrint(true)
                break
          case 'vinyls':
              setClient(vinylArray[id])
              setImages(vinylArray[id].images)
              setVideos(vinylArray[id].videos)
              setImageIndex(vinylArray[id].imageIndex)
              break
          case 'cd':
              setClient(cdArray[id])
              setImages(cdArray[id].images)
              setVideos(cdArray[id].videos)
              setImageIndex(cdArray[id].imageIndex)
              break
          case 'cassettes':
              setClient(cassetteArray[id])
              setImages(cassetteArray[id].images)
              setVideos(cassetteArray[id].videos)
              setImageIndex(cassetteArray[id].imageIndex)
              break
            //todo
          // case 'posters':
          //     setClient(posterArray[id])
          //     setImages(posterArray[id].images)
          //     break
            case 'divers':
                setClient(othersArray[id])
                setImages(othersArray[id].images)
                setVideos(othersArray[id].videos)
                setImageIndex(othersArray[id].imageIndex)
                setIsPrint(true)
            default:
                break
        }
    }, [id, pathName])

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1,
        config: {duration: 1000}
    })

    const newMapper = (item, index) => {
      if (client.medIndex.includes(index)) {
        return <animated.div style={fade} key={index} className="details-frame-med">
          <Media index={index} item={item.media} id={id} images={images} sizes={client.images.length}/>
        </animated.div>
      } else if (client.squareIndex.includes(index)) {
        return <animated.div style={fade} key={index} className="details-frame-square">
          <Media index={index} item={item.media} id={id} images={images} sizes={client.images.length}/>
        </animated.div>
      } else if (client.smallIndex.includes(index)) {
        return <animated.div style={fade} key={index} className="details-frame-small">
          <Media index={index} item={item.media} id={id} images={images} sizes={client.images.length}/>
        </animated.div>
      } else if (client.tinyIndex.includes(index)) {
        return <animated.div style={fade} key={index} className="details-frame-tiny">
          <Media index={index} item={item.media} id={id} images={images} sizes={client.images.length}/>
        </animated.div>
      } else {
        return <animated.div style={fade} key={index} className="details-frame-big">
          <Media index={index} item={item.media} id={id} images={images} sizes={client.images.length}/>
        </animated.div>
      }
    }

    const mobileMapper = (item, index) => {
        return <animated.div>
            <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
        </animated.div>
    }

    const sort = (array, counter) => {
      for (var i = 0; i < array.length; i++) {
        if (objects[i].index == counter) {
          counter++
          sorted.push(array[i])
        }
      }
      if(counter < array.length) sort(array, counter)
    }

    const medias = images.concat(videos)
    const indexes = imageIndex.concat(client.videoIndex)
    const objects = medias.map((x, i) => {
      return {"media": x, "index": indexes[i]}
    })

    var sorted = []

    sort(objects, 0)

    let displayed = sorted.map(newMapper)

    let imgMobile = images.map(mobileMapper)

    return <div>
        <Nav print={isPrint}/>
        <div className="details-container">
            <h1>{client.title}</h1>
            {client.text == null ? "" : <p className="description">{client.text}</p>}
            <BrowserView>
                <div className="details-grid">
                    {displayed}
                </div>
            </BrowserView>

            <MobileView>
                <div className="details-grid-mobile">
                    {imgMobile}
                </div>
            </MobileView>
        </div>
    </div>
}

export default Displayer
