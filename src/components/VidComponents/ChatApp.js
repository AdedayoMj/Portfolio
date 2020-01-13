import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import{Link} from 'react-router-dom'
import './ChatApp.css'


export default class ChatApp extends Component {
        constructor(props){
                super(props)
                this.state={
                    url:'https://youtu.be/42eDFq8fGD0',
                    github:"https://github.com/AdedayoMj/Chat-App"
                }
        }
    
    render() {
        
        return (
            <div className="row">
          
              <div className="vid-container">
              <ReactPlayer
                className='react-player'
                url={this.state.url}
                width='75%'
                height='100%'
                controls={true}
                />
              </div>
         
                <div className="item-container ">
                    <div className="moveC">
                    <Link to='/'>Back Home</Link>
                    <h3>ROMAN CALCULATOR</h3>
                    <br/>
                    <h4>NODE</h4>
                    <h4>REACT</h4>
                    <h4>SOCKET.IO</h4>
                    </div>
                   
                    <br/>
              <a href={this.state.github}>  
              <button className="btnC btnC_hover">
                  Source Code
                  </button>
              </a>
                </div>
            </div>
        )
    }
}
