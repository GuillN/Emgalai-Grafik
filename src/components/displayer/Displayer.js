/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { animated, useSpring } from "react-spring";
import PopupImage from "../items/popupImage";
import Media from "./Media"
import { MobileView, BrowserView } from "react-device-detect"
import {
  editionArray,
  musicArray,
  albumArray,
  merchArray,
  packagingArray,
  visuIdArray,
  posterArray,
  logoArray,
  workshopArray,
  tshirtArray,
  tapeArray,
  cdArray,
  lpArray,
  othersArray
} from "../../helpers/imageArrays";
import { history } from "../../helpers/history";
import './Displayer.css'
import Nav from "../nav/Nav";
import { useHover } from "../../helpers/HoverContext";

// TODO refactor css
// This component displays formatted popup images from an image array
const Displayer = props => {

  const [id] = useState(props.match.params.id)
  const [pathName, setPathName] = useState(history.location.pathname.split('/')[1])
  const [client, setClient] = useState({})
  const [images, setImages] = useState([])
  const [videos, setVideos] = useState([])
  const [imageIndex, setImageIndex] = useState([])
  const [isPrint, setIsPrint] = useState(false)
  const { setHoveredImage } = useHover();

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

  useEffect(() => {
    // Update pathname when location changes
    setPathName(history.location.pathname.split('/')[1]);

    let currentClient = null;

    switch (pathName) {
      case 'editions':
        currentClient = editionArray[id];
        setClient(currentClient);
        setImages(currentClient.images);
        setVideos(currentClient.videos);
        setImageIndex(currentClient.imageIndex);
        break
      case 'music':
        currentClient = musicArray[id];
        setClient(currentClient);
        setImages(currentClient.images);
        setVideos(currentClient.videos);
        setImageIndex(currentClient.imageIndex);
        break
      case 'albums':
        currentClient = albumArray[id];
        setClient(currentClient);
        setImages(currentClient.images);
        setVideos(currentClient.videos);
        setImageIndex(currentClient.imageIndex);
        break
      case 'merch':
        currentClient = merchArray[id];
        setClient(currentClient);
        setImages(currentClient.images);
        setVideos(currentClient.videos);
        setImageIndex(currentClient.imageIndex);
        break
      case 'packaging':
        currentClient = packagingArray[id];
        setClient(currentClient);
        setImages(currentClient.images);
        setVideos(currentClient.videos);
        setImageIndex(currentClient.imageIndex);
        break
      case 'visual-identity':
        currentClient = visuIdArray[id];
        setClient(currentClient);
        setImages(currentClient.images);
        setVideos(currentClient.videos);
        setImageIndex(currentClient.imageIndex);
        break
      case 'posters':
        currentClient = posterArray[id];
        setClient(currentClient);
        setImages(currentClient.images);
        setVideos(currentClient.videos);
        setImageIndex(currentClient.imageIndex);
        break
      case 'logos':
        currentClient = logoArray;
        setClient(currentClient);
        setImages(currentClient.images || []);
        setVideos(currentClient.videos || []);
        setImageIndex(currentClient.imageIndex || []);
        // For logos, we'll clear the background to keep it white
        setHoveredImage(null);
        break
      case 'print':
        let printPathName = history.location.pathname.split('/')[2]
        switch (printPathName) {
          case 'workshops':
            currentClient = workshopArray[id];
            setClient(currentClient);
            setImages(currentClient.images);
            setVideos(currentClient.videos);
            setImageIndex(currentClient.imageIndex);
            setIsPrint(true);
            break
          case 'tshirts':
            currentClient = tshirtArray[id];
            setClient(currentClient);
            setImages(currentClient.images);
            setVideos(currentClient.videos);
            setImageIndex(currentClient.imageIndex);
            setIsPrint(true);
            break
          case 'cd':
            currentClient = cdArray[id];
            setClient(currentClient);
            setImages(currentClient.images);
            setVideos(currentClient.videos);
            setImageIndex(currentClient.imageIndex);
            setIsPrint(true);
            break
          case 'tapes':
            currentClient = tapeArray[id];
            setClient(currentClient);
            setImages(currentClient.images);
            setVideos(currentClient.videos);
            setImageIndex(currentClient.imageIndex);
            setIsPrint(true);
            break
          case 'lp':
            currentClient = lpArray[id];
            setClient(currentClient);
            setImages(currentClient.images);
            setVideos(currentClient.videos);
            setImageIndex(currentClient.imageIndex);
            setIsPrint(true);
            break
          case 'other':
            currentClient = othersArray[id];
            setClient(currentClient);
            setImages(currentClient.images);
            setVideos(currentClient.videos);
            setImageIndex(currentClient.imageIndex);
            setIsPrint(true);
            break
        }
        break
      default:
        break
    }

    // Set the background image to the cover image of the current client
    // Only if not on the logos page
    if (pathName !== 'logos' && currentClient && currentClient.cover) {
      setHoveredImage(sanitizeImageUrl(currentClient.cover));
    }
  }, [id, pathName, props.location, setHoveredImage])

  const fade = useSpring({
    from: { opacity: 0, }, opacity: 1,
    config: { duration: 1000 }
  })

  const newMapper = (item, index) => {
    if (client.medIndex && client.medIndex.includes(index)) {
      return <animated.div style={fade} key={index} className="details-frame-med">
        <Media index={index} item={item.media} id={id} images={images} sizes={client.images ? client.images.length : 0} />
      </animated.div>
    } else if (client.squareIndex && client.squareIndex.includes(index)) {
      return <animated.div style={fade} key={index} className="details-frame-square">
        <Media index={index} item={item.media} id={id} images={images} sizes={client.images ? client.images.length : 0} />
      </animated.div>
    } else if (client.smallIndex && client.smallIndex.includes(index)) {
      return <animated.div style={fade} key={index} className="details-frame-small">
        <Media index={index} item={item.media} id={id} images={images} sizes={client.images ? client.images.length : 0} />
      </animated.div>
    } else if (client.tinyIndex && client.tinyIndex.includes(index)) {
      return <animated.div style={fade} key={index} className="details-frame-tiny">
        <Media index={index} item={item.media} id={id} images={images} sizes={client.images ? client.images.length : 0} />
      </animated.div>
    } else {
      return <animated.div style={fade} key={index} className="details-frame-big">
        <Media index={index} item={item.media} id={id} images={images} sizes={client.images ? client.images.length : 0} />
      </animated.div>
    }
  }

  const mobileMapper = (item, index) => {
    return <animated.div>
      <PopupImage index={index} item={item} id={id} images={images} sizes={client.images ? client.images.length : 0} />
    </animated.div>
  }

  const sort = (array, counter) => {
    // Add safety check to prevent infinite recursion
    if (!array || array.length === 0 || counter >= array.length || sorted.length >= array.length) {
      return;
    }
    
    // Using a simpler loop approach to avoid deep recursion
    let found = false;
    for (var i = 0; i < array.length; i++) {
      if (objects[i] && objects[i].index === counter) {
        counter++;
        sorted.push(array[i]);
        found = true;
        break;
      }
    }
    
    // Only continue recursion if we found something and haven't processed all items
    if (found && counter < array.length && sorted.length < array.length) {
      sort(array, counter);
    } else if (sorted.length < array.length) {
      // If we couldn't find the next index, skip to the next counter value
      sort(array, counter + 1);
    }
  }

  const medias = images.concat(videos || [])
  const indexes = (imageIndex || []).concat(client.videoIndex || [])
  const objects = medias.map((x, i) => {
    return { "media": x, "index": indexes[i] !== undefined ? indexes[i] : i }
  })

  var sorted = []

  // Only run sort if we have valid data
  if (medias.length > 0) {
    sort(objects, 0)
  }

  let displayed = sorted.map(newMapper)

  let imgMobile = images.map(mobileMapper)

  return <div>
    <Nav print={isPrint} />
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


