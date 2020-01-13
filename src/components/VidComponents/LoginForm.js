import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import{Link} from 'react-router-dom'
import './LoginForm.css'


export default class LoginForm extends Component {
        constructor(props){
                super(props)
                this.state={
                    url:'https://youtu.be/NQxDL6_daB4',
                    github:"https://github.com/AdedayoMj/YobetitForm"
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
                    <div className="moveC">
                    <h3>LOGIN FORM USING</h3>
                    <h3> JWT & REDUX</h3>
                    <br/>
                    <h4>NODE</h4>
                    <h4>REACT</h4>
                    <h4>REDUX</h4>
                    <h4>MONGODB</h4>
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
