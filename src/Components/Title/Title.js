import React, { Component } from 'react';
import './Title.css';

class Title extends Component{
    constructor(){
        super();
        this.state = {
            title: 'Dummy title',
            isInput: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.keyPressHandler = this.keyPressHandler.bind(this);
    }
    changeHandler(e){
        this.setState({
            ...this.state,
            title:e.target.value
        })
    }
    keyPressHandler(e){
        if(e.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput: false
            });
        }
    }
    render(){
        let title = null;
        if(this.state.isInput){
            title = (
                <div className="title m-4">
                    <input onChange={this.changeHandler} 
                    onKeyPress={this.keyPressHandler} 
                    onBlur={() => {this.setState({isInput:false})}}
                    className="form-control" type="text" value={this.state.title} />
                   
                </div>
            );
        }
        else{
            title = (
                <div className="d-flex title m-4">
                    <h4>{this.state.title}</h4>
                    <span onClick={()=>{this.setState({isInput: true})}} className="icon ml-auto"><i className="fa fa-edit">Edit</i></span>
                </div>
            )
        }
        return(
            <div>
                {title}
            </div>
        )
    }
}

export default Title;