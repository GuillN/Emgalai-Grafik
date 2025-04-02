/* eslint-disable */
import React from "react"
import ReactPlayer from "react-player"

class CarouselPane extends React.Component {

    handleProgress = () => {
        let duration = this.player.getDuration()
        let currentTime = this.player.getCurrentTime()
        if (duration - currentTime < 1) {
            this.player.seekTo(1)
        }
    }

    ref = player => {
        this.player = player
    }

    render() {
        const url = `https://www.facebook.com/emgalai/videos/${this.props.videoId}/`
        return <div className="carousel-pane">
            <ReactPlayer ref={this.ref} url={url} volume={0} playing onProgress={this.handleProgress}/>
        </div>
    }
}

export default CarouselPane
