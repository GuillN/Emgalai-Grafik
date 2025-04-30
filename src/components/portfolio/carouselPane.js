/* eslint-disable */
import React from "react"
import ReactPlayer from "react-player"

class CarouselPane extends React.Component {
    state = {
        isError: false,
        isLoading: true
    }

    handleProgress = () => {
        let duration = this.player.getDuration()
        let currentTime = this.player.getCurrentTime()
        if (duration - currentTime < 1) {
            this.player.seekTo(1)
        }
    }

    handleError = () => {
        this.setState({ isError: true })
    }

    handleReady = () => {
        this.setState({ isLoading: false })
    }

    ref = player => {
        this.player = player
    }

    render() {
        const { videoUrl, fallbackImage } = this.props
        const { isError, isLoading } = this.state

        if (isError) {
            return (
                <div className="carousel-pane error-state">
                    <img src={fallbackImage} alt="Video unavailable" />
                    <p>Video unavailable</p>
                </div>
            )
        }

        return (
            <div className="carousel-pane">
                {isLoading && (
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                    </div>
                )}
                <ReactPlayer 
                    ref={this.ref} 
                    url={videoUrl} 
                    volume={0} 
                    playing 
                    onProgress={this.handleProgress}
                    onError={this.handleError}
                    onReady={this.handleReady}
                    width="100%"
                    height="100%"
                    config={{
                        facebook: {
                            playerVars: {
                                showinfo: 0,
                                controls: 0,
                                modestbranding: 1,
                                rel: 0,
                                quality: 'hd1080'
                            }
                        },
                        youtube: {
                            playerVars: {
                                showinfo: 0,
                                controls: 0,
                                modestbranding: 1,
                                rel: 0,
                                quality: 'hd1080'
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default CarouselPane
