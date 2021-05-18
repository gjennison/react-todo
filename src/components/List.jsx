import React, {Component} from 'react';

export default class List extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    clicked(e, item){
        if(e.target.classList.contains('close')) {
            this.props.closeCallback(item)
        }
        else {
            console.log('tick')
            
            if(e.target.classList.contains('item-text')){
                e.target.parentElement.classList.toggle('underline');
            }
            else e.target.classList.toggle('underline');
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.props.items.map((item, index) => 
                    <div className="item" key={index} onClick={(e) => this.clicked(e, item)}>
                        <p className="item-text">{item}</p>
                        <img className="close" src="close.png" alt="" />
                    </div>
                )}
            </React.Fragment>
        )
    }
}