import React, {Component} from 'react';

export default class CorrectText extends Component {
    handleSubmit(el){
        this.props.updateInput(el.target.value)
    }
    render(){
        return(
            <input value={this.prop.correctTextInput} onSubmit={this.handleSubmit.bind(this)} />
        );
    }
}
