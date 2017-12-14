import React, { Component } from 'react'

export default class GoodRobo extends Component {
    render(){
        return(
        <h2>GoodRobo</h2>
        <p>I hear you saying {this.props.correctTextInput}. Is that correct<p>
        );
    }
}
