import React, { Component } from 'react'
import Apartments from '../store/Apartments'
import {Link} from 'react-router-dom'


class ApartmentDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: Apartments
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({apartmentId: id})
    let apartment = this.state.apartments.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(apartment){
      this.setState({apartment: apartment})
    }
  }

  render() {
      let imagesList = this.state.apartment.images.map(function(image){
          return(
              <img src={image} key={image}/>
          )
    })
    return (
      <div>
        <h3>{this.state.apartment.name}</h3>
        {imagesList}
        <p>Bedroom(s): {this.state.apartment.bedroom}</p>
        <p>Bathroom(s): {this.state.apartment.bathroom}</p>
        <p>Description: {this.state.apartment.description}</p>
        <Link to='/'>See all listings</Link>
      </div>
    );
  }
}

export default ApartmentDetail;
