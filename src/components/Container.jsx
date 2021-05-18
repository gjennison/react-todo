import React, {Component} from 'react';
import Input from './Input';
import List from './List';

export default class Container extends Component{
    constructor(props){
        super(props)

        this.state = {
            value: "",
            items: ['go to the supermarket', 'work on portfolio',
            'go to course', 'cook dinner for flatmates']
        }
    }

    valueCallback = (value) => {
        let items = this.state.items;
        items.push(value)
        this.setState({items: items})
    }

    closeCallback = (item) => {
        let items = this.state.items;
        let index = items.indexOf(item);
        items.splice(index, 1);
        this.setState({items: items})
    }

    render(){
        return(
            <div className="container">
                <Input valueCallback={this.valueCallback}/>
                <List items={this.state.items} value={this.state.value} closeCallback={this.closeCallback}/>
            </div>
        )
    }
}