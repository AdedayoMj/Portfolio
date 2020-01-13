import React from 'react';
import Button from './Button'
import img1 from "../images/node3.png" 
import img2 from "../images/react.png"
import img3 from "../images/java.png"
import{Link} from 'react-router-dom'

import './frontPage.css'
import ProjectButton from './ProjectButton'


function frontPage (){


        return (
       <div className="App">
            <div>
            <div className="slantedDiv App-Content ">
                <div className="slanted-overlay">
                <div className="section ">
                    <h1>ADEDAYO ADEGBOYE</h1>
                   
                    <h3>FRONTEND ENGINEER</h3>
                    <div className='btn-m' >
                <Button  >SEE PROJECTS</Button>    
                </div>
                </div>
               
                <br/>
                
                
                    
                </div>
                
            </div>
            <div className="slantedDivmid App-content">
            <div className="slanted-overlayC">
                <div className="section-mid" >
                    <h2>FRONTEND FOCUSED WITH</h2>
                    <h2>FULL STACK EXPERIENCE</h2>
                </div>
                <div className="row">
                    <div className="column">
                    <img src={img1} alt="node" width="350" height="200"/>
                    </div>
                    <div className="column">
                    <img src={img2} alt="node" width="300" height="200"/>
                    </div>
                    <div className="column">
                    <img src={img3} alt="node" width="300" height="200"/>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className="slantedDivmidB">
                <div className="slanted-overlayB">
                    <div className="section-mid" >
                        <h3>SKILLS</h3>
                    </div>

                    <div className="row">
                        <div className="column">
                        <div className="card">
                        <br/>
                            <div className="container-logo">
                            <i class="fa fa-window-maximize fa-spin fa-5x fa-fw"></i>
                            <span class="sr-only">Loading...</span>
                            </div>
                            <br/>
                            <div className="container2 pa">
                               <h3>FRONTEND</h3>
                            <div className="black">
                            <h4> REACT</h4>
                               <h4> HTML</h4>
                               <h4> CSS</h4>
                               <h4> JAVSCRIPT</h4>
                            </div>
                               
                               </div>
                        </div>
                        </div>
                        <div className="column">
                        <div className="card">
                        <br/>
                            <div className="container-logo">
                            <i class="fa fa-server fa-spin fa-5x fa-fw"></i>
                            <span class="sr-only">Loading...</span>
                            </div>
                            <br/>
                            <div className="container2 pa">
                            <h3 >SERVER</h3>
                            <div className="black">
                                <h4> NODE</h4>
                                <h4> EXPRESS</h4>
                   
                            </div>
                            </div>
                    
                        </div>
                        </div>
                    <div className="column">
                        <div className="card">
                            <br/>
                            <div className="container-logo">
                            <i class="fa fa-database fa-spin fa-5x fa-fw"></i>
                            <span class="sr-only">Loading...</span>
                            </div>
                            <br/>
                            <div className="container3 pa">
                            
                            <h3 >DATABASE</h3>
                            </div>
                            <div className="container2 black">
                               <h4> FIREBASE</h4>
                               <h4> MONGODB</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="slantedDivBottom">
                
            <div className="slanted-overlayC">
                <div id ='project'className="section-mid" >
                    <h1 >PORTFOLIO</h1>
                    <br/>
                    <br/>
                </div>
           
                 
                <div className="row">
                    <div className="column-mid ">
                        <div className="card"> 
                        <div className="slantedDivChat"></div>
                        <div className="container3">
                        <h4 className="pa">CHAT APP</h4>
                        <div className="container2 black">
                        <h5>NODE</h5>
                        <h5>REACT</h5>
                        <h5>SOCKET.IO</h5>
                        <div className='demo2'>
                       <Link to='/chat'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                        
                        
                        </div>
                    
                    </div>
                    
                    <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivRoman"></div>
                        <div className="container3 pa">
                    
                        <h4 >ROMAN CAL</h4>
                        
                        <div className="container2 black">
                        <h5>REACT</h5>
                        <h5>NO PACKAGE</h5>
                        <div className='demo'>
                        <Link to='/roman'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                       
                        
                     </div>
                    
                    </div>
                
                    <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivPaint"></div>
                        <div className="container3 pa">
                    
                        <h4 className="">PAINTBALL</h4>
                        
                        <div className="container2 black">
                        <h5>REACT</h5>
                        <h5>FIREBASE</h5>
                        <h5>REDUX</h5>
                        <div className='demo2'>
                        <Link to='/paintball'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                       
                        
                     </div>
                    
                    </div>

                    <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivWe"></div>
                        <div className="container3 pa">
                    
                        <h4 className="">WEATHER APP</h4>
                      
                        <div className="container2 black">
                        <h5>REACT</h5>
                        <h5>WEATHER/TIME API</h5>
                        <div className='demo'>
                        <Link to='/weather'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                       
                        
                     </div>
                    
                    </div>
                    
                </div>
                <br/>
                <br/>
                <div className="row">
                    
                <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivTrack"></div>
                        <div className="container3">
                        <h4 className="pa">TRACKER APP</h4>
                      
                        <div className="container2 black">
                        <h5>NODE</h5>
                        <h5>REACT</h5>
                        <h5>MONGODB</h5>
                        <div className='demo2'>
                        <Link to='/'> <ProjectButton /></Link>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                    
                    </div>

                    <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivWaste"></div>
                        <div className="container3">
                        <h4 className="pa">WASTE DISPOSAL </h4>
                        
                        <div className="container2 black">
                        <h5>GOOGLE API</h5>
                        <h5>REACT</h5>
                        <div className='demo'>
                        <Link to='/waste'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                    
                    </div>


                    <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivStore"></div>
                        <div className="container3">
                        <h4 className="pa">ONLINE SHOPPING</h4>
                        </div>
                        <div className="container2 black">
                        <h5>REDUX</h5>
                        <h5>REACT</h5>
                        <h5>FIREBASE</h5>
                        <div className='demo2'>
                        <Link to='/online'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivForm"></div>
                        <div className="container3">
                        <h4 className="pa">RECORDS</h4>
                        
                        <div className="container2 black">
                        <h5>REDUX</h5>
                        <h5>REACT</h5>
                        <h5>FIREBASE</h5>
                        <div className='demo2'>
                        <Link to='/record'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    
                </div>

                <br/>
                <br/>
                <div className="row">
                    
                <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivFormJwt"></div>
                        <div className="container3">
                        <h4 className="pa">LOGIN FORM(JWT) </h4>
                      
                        <div className="container2 black">
                        <h5>NODE</h5>
                        <h5>REDUX</h5>
                        <h5>REACT</h5>
                        <h5>MONGODB</h5>
                        <div className='demo3'>
                        <Link to='/login'> <ProjectButton /></Link>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                    
                    </div>

                    <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivSlot"></div>
                        <div className="container3">
                        <h4 className="pa">SLOT MACHINE </h4>
                        
                        <div className="container2 black">
                        <h5>REDUX</h5>
                        <h5>REACT</h5>
                        <div className='demo'>
                        <Link to='/slot'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                        </div>
                        
                    
                    </div>


                    <div className="column-mid ">
                        <div className="card">
                        <div className="slantedDivRest"></div>
                        <div className="container3">
                        <h4 className="pa">REST COUNTRY</h4>
                        </div>
                        <div className="container2 black">
                        <h5>REDUX</h5>
                        <h5>REACT</h5>
                        <h5>NODE</h5>
                        <h5>API</h5>
                        <div className='demo3'>
                        <Link to='/rest'> <ProjectButton/></Link>
                        </div>
                        </div>
                        </div>
                    </div>
                   
                    

                    <div className="row">    
                    <div className="column-mid">
                       
                    </div>
                    </div> 
                </div>

                </div>

                
            </div>
            </div>
            </div>
        )
    }

export default frontPage