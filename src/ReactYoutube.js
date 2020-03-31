import React, { Component } from 'react';
import YouTube from 'react-youtube';


// https://youtu.be/_nBlN9yp9R8
// https://www.youtube.com/watch?v=_nBlN9yp9R8

class ReactYoutube extends Component {
  
  VideoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
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
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.VideoOnReady}
      />
    );
  }
}

export default ReactYoutube;
