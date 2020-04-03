import React, { Component } from 'react';
import './App.css';
import ReactYoutube from './ReactYoutube';
import Axios from 'axios';

class App extends Component { 

    state = {
        Video: [],
      }
    
      componentDidMount(){
        this.getVideo();
      }
      
      getVideo = () => {
        Axios({
          method: 'GET',
          url: '/video'
        }).then((response) => {
          console.log(response.data)
          this.setState({
              Video:[response.data[0].youtubeID]
          })
          console.log(this.state.Video)
        })
      }
      newVideoButton = () => {
        this.getVideo();
      }
      
    render(){
        return(
            <div className='App'>
                <ReactYoutube videoId={this.state.Video}/>
                <button onClick={this.newVideoButton}>Click me</button>
            </div>
        )
    }
}

export default App;