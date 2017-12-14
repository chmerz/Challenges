import React, { Component } from 'react'

export default class TextInput extends Component {
    render(){
        return(
        <form>
        <label for="TextInput">Say something</label>
        <input type="text" id="TextInput" placeholder="Enter Your Text"></input>
        </form>
        );
    }
}
