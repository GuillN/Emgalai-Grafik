/* eslint-disable */
import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import PopupImage from "../items/popupImage"

const Media = props => {
  const [item] = useState(props.item)
  let url
  let extension = item.split('.')[item.split('.').length - 1]
  if (extension !== 'jpg' && extension !== 'png' && extension !== 'jpeg') {
      url = `https://www.youtube.com/watch?v=${item}/`
  }

  return <div>
    {extension == 'jpg'|| extension == 'png' || extension == 'jpeg' ?
      <PopupImage index={props.index} item={item} id={props.id} images={props.images} sizes={props.sizes}/> :
      <ReactPlayer className="details-video" url={url} controls/>
    }
  </div>
}

export default Media
