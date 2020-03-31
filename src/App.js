import React, { Component } from 'react';
import './App.css';
import ReactYoutube from './ReactYoutube';

class App extends Component { 
    render(){
        return(
            <div className='App'>
                <ReactYoutube videoId='Bat2WS9qBNw'/>
            </div>
        )
    }
}

export default App;