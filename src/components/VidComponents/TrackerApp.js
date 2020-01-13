import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import{Link} from 'react-router-dom'
import './TrackerApp.css'


export default class RomanCal extends Component {
        constructor(props){
                super(props)
                this.state={
                    url:'https://youtu.be/R_lXYp1xnHo',
                    github:"https://github.com/AdedayoMj/Roman-Calculator"
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
                    <div className="moveT">
                    <h3>EXERCISE TRACKER</h3>
                    <br/>
                    <h4>REACT</h4>
                    <h4>NODE</h4>
                    <h4>MONGODB</h4>
                    </div>
                   
                    <br/>
              <a href={this.state.github}>  
              <button type='button' className="btn btn_hover" disabled>
                  Source Code
                  </button>
              </a>
                </div>
            </div>
        )
    }
}
