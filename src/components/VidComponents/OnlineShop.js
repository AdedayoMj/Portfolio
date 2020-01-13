import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import{Link} from 'react-router-dom'
import './OnlineShop.css'


export default class OnlineShop extends Component {
        constructor(props){
                super(props)
                this.state={
                    url:'https://www.linkedin.com/posts/majeed-adegboye-47189142_shoppingcart-simpledesign-paypal-activity-6594578491684069376-f_XP/',
                    github:"https://github.com/AdedayoMj/React-Shopping-Website"
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
                    <h3>ONLINE SHOPPING</h3>
                    <br/>
                    <h4>Visit <a href={this.state.url}>Linkedln Demo</a>
                        to watch the demo
                    </h4>
                    <h4>REACT</h4>
                    <h4>REDUX</h4>
                    <h4>FIREBASE</h4>
                    </div>
                   
                    <br/>
              <a href={this.state.github}>  
              <button className="btn2 btn_hover">
                  Source Code
                  </button>
              </a>
                </div>
            </div>
        )
    }
}
