import React, {Component} from 'react';

export default class Input extends Component{
    constructor(props){
        super(props)

        this.state = {
            value: ""
        }
    }

    onKeyDown = e => {
        if(e.key === 'Enter') {
            this.props.valueCallback(this.state.value)
            this.setState({value: ""})
        }
    }
    
    handleChange = e => {
        this.setState({value: e.target.value});
    }

    render(){
        return(
            <div className="input">
                <input value={this.state.value} onChange={this.handleChange} onKeyDown={this.onKeyDown} type="text" />
                <div className="button add"></div>
            </div>
        )
    }
}