import React, { Component } from 'react';
import YouTube from 'react-youtube';


// https://youtu.be/_nBlN9yp9R8
// https://www.youtube.com/watch?v=_nBlN9yp9R8

class ReactYoutube extends Component {
  
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideoAt();
    console.log(event.target);
  }
 
  newVideoButton(){
    console.log('Ive been clicked');
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
        <button onClick={this.newVideoButton}>Click me</button>
      </div>
    );
  }
}

export default ReactYoutube;
