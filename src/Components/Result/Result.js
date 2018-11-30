import React, { Component } from 'react';

class Result extends Component{
    render(){
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Minute : {this.props.minute}</li>
                    <li className="list-group-item">Second : {this.props.second}</li>
                    <li className="list-group-item">Milisecond : {this.props.mili}</li>
                </ul>
            </div>
        )
    }
}

export default Result;