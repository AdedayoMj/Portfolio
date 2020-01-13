import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import{Link} from 'react-router-dom'
import './Waste.css'


export default class WeatherApp extends Component {
        constructor(props){
                super(props)
                this.state={
                    url:'https://youtu.be/YX_9Lh4c6oQ',
                    github:"https://github.com/AdedayoMj/WasteMangementSystem"
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
                    <div className="moveN">
                    <h3>WASTE DELIVERY APP</h3>
                    <br/>
                    <h4>REACT</h4>
                    <h4>GOOGLE API</h4>
                    <h4>GEOLOCATION</h4>
                    </div>
                   
                    <br/>
              <a href={this.state.github}>  
              <button className="btnN btnN_hover">
                  Source Code
                  </button>
              </a>
                </div>
            </div>
        )
    }
}
