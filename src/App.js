
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import frontPage from './components/frontPage'
import error from './components/error'
import ChatApp from './components/VidComponents/ChatApp'
import OnlineShop from './components/VidComponents/OnlineShop'
import Paintball from './components/VidComponents/Paintball'
import Records from './components/VidComponents/Records'
import RomanCal from './components/VidComponents/RomanCal'
import TrackerApp from './components/VidComponents/TrackerApp'
import Waste from './components/VidComponents/Waste'
import WeatherApp from './components/VidComponents/WeatherApp'
import LoginForm from './components/VidComponents/LoginForm'
import SlotMachine from './components/VidComponents/SlotMachine'
import RestCountry from './components/VidComponents/RestCountry'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route path='/' exact component={frontPage}/>
        <Route path='/chat' exact component={ChatApp}/>
        <Route path='/online' exact component={OnlineShop}/>
        <Route path='/paintball' exact component={Paintball}/>
        <Route path='/record' exact component={Records}/>
        <Route path='/waste' exact component={Waste}/>
        <Route path='/weather' exact component={WeatherApp}/>
        <Route path='/roman' exact component={RomanCal}/>
        <Route path='/tracker' exact component={TrackerApp}/>
        <Route path='/login' exact component={LoginForm}/>
        <Route path='/slot' exact component={SlotMachine}/>
        <Route path='/rest' exact component={RestCountry}/>
        <Route path='*' exact component={error}/>
       
    </Switch>
    </Router>
    )
  }
}

