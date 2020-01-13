import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import{Link} from 'react-router-dom'
import './Weather.css'


export default class WeatherApp extends Component {
        constructor(props){
                super(props)
                this.state={
                    url:'https://youtu.be/piMdsWDkZK8',
                    github:"https://github.com/AdedayoMj/Weather-App"
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
                <Link to='/'>Back home</Link>
                    <div className="moveW">
                    <h3>WEATHER APP</h3>
                    <br/>
                    <h4>REACT</h4>
                    <h4>WEATHER API</h4>
                    <h4>TIME API</h4>
                    </div>
                   
                    <br/>
              <a href={this.state.github}>  
              <button className="btnW btnW_hover">
                  Source Code
                  </button>
              </a>
                </div>
            </div>
        )
    }
}
