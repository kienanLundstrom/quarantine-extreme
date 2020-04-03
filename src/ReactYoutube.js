import React, { Component } from 'react';
import YouTube from 'react-youtube';



class ReactYoutube extends Component {

  videoOnReady(event) {
    event.target.playVideoAt();
  }
 

  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    
    const {videoId} = this.props

    return (
      <div>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={this.videoOnReady}
          onPlay={this.videoOnPlay}
        />
       
      </div>
    );
  }
}

export default ReactYoutube;
