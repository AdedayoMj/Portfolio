import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import{Link} from 'react-router-dom'
import './Paintball.css'


export default class Paintball extends Component {
        constructor(props){
                super(props)
                this.state={
                    url:'https://youtu.be/F_CCmC7eMdk',
                    github:"https://github.com/AdedayoMj/TC-Paintball"
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
                    <div className="move">
                    <h3>PAINTBALL</h3>
                    <br/>
                    <h4>REACT</h4>
                    <h4>REDUX</h4>
                    <h4>FIREBASE</h4>
                    </div>
                   
                    <br/>
              <a href={this.state.github}>  
              <button className="btn btn_hover">
                  Source Code
                  </button>
              </a>
                </div>
            </div>
        )
    }
}
