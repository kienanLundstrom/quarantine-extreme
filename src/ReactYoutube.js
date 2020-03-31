import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';


// https://youtu.be/_nBlN9yp9R8
// https://www.youtube.com/watch?v=_nBlN9yp9R8

class ReactYoutube extends Component {
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}

export default ReactYoutube;
