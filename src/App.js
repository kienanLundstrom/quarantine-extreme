import React, { Component } from 'react';
import './App.css';
import ReactYoutube from './ReactYoutube';
import { Button } from '@material-ui/core';
import Axios from 'axios';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  background: 'linear-gradient(to bottom right, yellow, red)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'black',
  height: 48,
  padding: '0 30px',
  marginRight: '25px',
});

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
        console.log(this.state.videoIndex)
      }
      newVideoButton = () => {
          this.setState({
            videoIndex: this.state.videoIndex + 1
         }) 
         if ( this.state.videoIndex > 23) {
          this.setState({
            videoIndex: 0
          }) 
         }
        }
      
      prevVideoButton = () => {
          this.setState({
            videoIndex: this.state.videoIndex - 1
          }) 
          if (this.state.videoIndex < 0 ){
            this.setState({
              videoIndex: 23
            }) 
          }
          console.log(this.state.videoIndex)
        }
 
      
    render(){
        return(
            <div className='App'>
                  <div className='vidPlayer'>
                    <ReactYoutube videoId={this.state.Video[this.state.videoIndex] &&
                    this.state.Video[this.state.videoIndex].youtubeID}/>
                  </div>
                  <div className='buttonRow'>
                  <MyButton  onClick={this.prevVideoButton}>Prev Video</MyButton>

                  <MyButton  onClick={this.newVideoButton}>New Video</MyButton>
                  </div>
            </div>
        )
    }
} 
export default App;