import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ApartmentIndex from './ApartmentIndex'
import ApartmentDetail from './ApartmentDetail'
import '../App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      <h1 className="App-title">Luxury Craigslist</h1>
        <p className="App-intro">
          Welcome to your new home!
        </p>
        <Route exact path="/" component={ApartmentIndex} />
        <Route path='/apartments/:id' component={ApartmentDetail} />
      </div>
     </Router>
    );
  }
}

export default App;
