import React, { Component } from 'react';
import logo from './images/Kanye.gif';
import './App.css';
import TextInput from './TextInput'
import GoodRobo from './GoodRobo'
import BadRobo from './BadRobo'
import KanyeRobo from './KanyeRobo'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Robo Active Listening</h1>
        </header> <br />
        <TextInput />
        <GoodRobo />
        <BadRobo />
        <KanyeRobo />
      </div>
    );
  }
}
