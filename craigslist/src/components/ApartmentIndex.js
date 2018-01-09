import React, { Component } from 'react'
import Apartments from '../store/Apartments'
import {Link} from 'react-router-dom'

class ApartmentIndex extends Component {
  componentWillMount(){
    this.setState({apartments: Apartments})
  }
render() {
    let list = this.state.apartments.map(function(apartment){
    return(
      <li key={apartment.id}>
      <br/>
      <img class= "thumbnail" src={apartment.thumbnail}/>
      <br/>
    <Link to={`/Apartments/${apartment.id}`} >
          {apartment.name}
         <br/>
        </Link>
      </li>
    )
  })
  return (
    <p>
      {list}
    </p>
  );
}
}


export default ApartmentIndex;
