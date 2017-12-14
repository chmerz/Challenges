import React, { Component } from 'react';
import logo from './images/meteor.gif';
import './App.css';
import neoData from './sample-neo.js'

class App extends Component {
    constructor(props){
        super(props)
        let today = new Date()
        this.state= {
            apiKey: "LPLCx9ahuQF7h3gqUgFGoEj0hbQSkTpmAQUJ4o08",
            startDate: `${today.getFullYear()} - ${today.getMonth() +1} - ${today.getDate()}`,
            apiUrl: "https://api.nasa.gov/neo/rest/v1/feed?",
            rawData: neoData,
            asteroids: []
        }
    }

componentWillMount(){
    fetch(`${this.state.apiUrl}?start_date=${this.state.startDate}&api_key=${this.state.apiKey}`)
    .then((rawResponse)=>{
        return rawResponse.json()
    }).then((parsedResponse)=>{
        let neoData = parsedResponse.near_earth_objects
        let newAsteroids = []
    Object.keys(neoData).forEach((Date)=>{
        neoData[Date].forEach((asteroid)=>{
            newAsteroids.push({
                id: asteroid.neo_reference_id,
                name: asteroid.name,
                date: asteroid.close_approach_data[0].close_approach_date,
                diameterMin: asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0),
                diameterMax: asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0),
                distance: asteroid.close_approach_data[0].miss_distance.miles,
                })
            })
        })
        this.setState({asteroids: newAsteroids})
    })
}
  render() {
    return (
      <div className="App">
        <header className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Duck, Duck, Meteor</h1>
        </header>
        <p>A meteoro is a small rocky or metallic body in outer space. Meteoroids are significantly smaller than asteroids, and range in size from small grains to 1 meter-wide objects.Objects smaller than this are classified as micrometeoroids or space dust. Most are fragments from comets or asteroids, whereas others are collision impact debris ejected from bodies such as the Moon or Mars. When a meteoroid, comet, or asteroid enters Earths atmosphere at a speed typically in excess of 20 km/s (72,000 km/h; 45,000 mph), aerodynamic heating of that object produces a streak of light, both from the glowing object and the trail of glowing particles that it leaves in its wake. This phenomenon is called a meteor or shooting star</p>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Estimated Diameter(feet)</th>
                    <th>Date of closest approach</th>
                    <th>Distance (miles)</th>
                </tr>
            </thead>
            <tbody>
                {this.state.asteroids.map((asteroid) => {
                    return(
                        <tr key={asteroid.id}>
                            <td>{asteroid.name}</td>
                            <td>{asteroid.diameterMin} - {asteroid.diameterMax}</td>
                            <td>{asteroid.date}</td>
                            <td>{asteroid.distance}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;


//api_key=LPLCx9ahuQF7h3gqUgFGoEj0hbQSkTpmAQUJ4o08
