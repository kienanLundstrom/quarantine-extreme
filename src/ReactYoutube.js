import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Axios from 'axios';


class ReactYoutube extends Component {
  state = {
    video: [],
  }

  componentDidMount(){
    this.getVideo();
  }
  
  getVideo = () => {
    Axios({
      method: 'GET',
      url: '/video'
    }).then((response) => {
      console.log(response)
    })
  }

  videoOnReady(event) {
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
