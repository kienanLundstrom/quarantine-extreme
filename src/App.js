import React, { Component } from 'react';
import './App.css';
import ReactYoutube from './ReactYoutube';
import Axios from 'axios';

class App extends Component { 

    state = {
        Video: [],
        databaseId: [],
      }
    
      componentDidMount(){
        this.getVideo();
      }
      
      getVideo = () => {
        let firstId = this.state.databaseId;
        Axios({
          method: 'GET',
          url: '/video'
        }).then((response) => {
          console.log(response.data)
          if (response.data[0].id === firstId ){
            this.getVideo();
          } else {
          this.setState({
              Video:[response.data[0].youtubeID],
              databaseId: [response.data[0].id]
          })
          console.log(this.state.Video)
          console.log(this.state.databaseId)
          }
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