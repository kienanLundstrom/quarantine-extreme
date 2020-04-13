import React, { Component } from 'react';
import './App.css';
import ReactYoutube from './ReactYoutube';
import Axios from 'axios';

class App extends Component { 

    state = {
        Video: [],
        videoIndex: 0,
      }
    
      componentDidMount(){
        this.getVideo();
      }
      
      getVideo = () => {
        Axios({
          method: 'GET',
          url: '/video'
        }).then((response) => {
          this.setState({
              Video:[],
          })
          response.data.forEach((vid)=>{
              this.setState({
                  Video: [...this.state.Video, vid]
              })
          })
        })
      }
      newVideoButton = () => {
        this.setState({
            videoIndex: this.state.videoIndex + 1
        })
        console.log(this.state.videoIndex)
      }
      
    render(){
        
        return(
            <div className='App'>
                <ReactYoutube videoId={this.state.Video[this.state.videoIndex] && this.state.Video[this.state.videoIndex].youtubeID}/>
                <button onClick={this.newVideoButton}>Click me</button>
            </div>
        )
    }
}

export default App;