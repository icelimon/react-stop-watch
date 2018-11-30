import React, { Component } from 'react';

class Button extends Component{
    
    render(){
        let startBtn = null;
        let resetBtn = null;
        if(this.props.start){
            resetBtn = (
                <button onClick={this.props.resetHandler} className="btn btn-danger btn-lg m-4">Reset</button>
            )
        }
        if (this.props.active){
            startBtn = (
            <button onClick={this.props.pauseHandler} className="btn btn-warning btn-lg m-4">Pause</button>
            );
            
        }else{
            startBtn = (
                <button onClick={this.props.startHandler} className="btn btn-success btn-lg m-4">{this.props.start ? 'Resume' : 'Start'}</button>
            );
            
        }
  
        return(
            <div className="d-flex">
                {startBtn}
                {resetBtn}
            </div>
        )
    }
}

export default Button;