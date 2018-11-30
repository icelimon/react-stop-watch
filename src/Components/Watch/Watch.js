import React, { Component } from 'react';
import Button from '../Button/Button';
import Result from '../Result/Result';
import './Watch.css';

class Watch extends Component{
    constructor(props){
        super(props);
        this.state = {
            start: false,
            active: false,
            second: 0,
            minute: 0,
            mili: 0
        }
        this.startHandler = this.startHandler.bind(this);
        this.pauseHandler = this.pauseHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
    }

    startHandler(){
        this.setState({
            start: true,
            active: true
        })
        this.intervalid = setInterval(()=>{
            this.setState({
                ...this.state,
                mili: (this.state.mili+1)%100
            });
            if(this.state.mili === 0){
                if(this.state.second === 59){
                    this.setState({minute:(this.state.minute+1)%60})
                }
                this.setState({second: (this.state.second+1)%60});
            }
            
        },10);
    }
    pauseHandler(){
        this.setState({
            active: false
        });
        clearInterval(this.intervalid);
    }

    resetHandler(){
        this.setState({
            start: false,
            active: false,
            second: 0,
            minute: 0,
            mili: 0
        })
    }
    render(){
        
        return(
            <div>
                <div className="">
                    <div className="d-flex">
                        <div className="circle list-item">
                            <h3 className="times">{this.state.minute < 10 ? `0${this.state.minute}`: this.state.minute}</h3>
                        </div>
                        <div className="circle list-item">
                            <h3 className="times">{this.state.second < 10 ? `0${this.state.second}` : this.state.second}</h3>
                        </div>
                        <div className="circle list-item">
                            <h3 className="times">{this.state.mili < 10 ? `0${this.state.mili}` : this.state.mili}</h3>
                        </div>
                    </div>
                </div>
                <Button startHandler = {this.startHandler} 
                pauseHandler = {this.pauseHandler}
                resetHandler={this.resetHandler} 
                active={this.state.active} 
                start={this.state.start}/>

                <Result minute={this.state.minute}
                second={this.state.second}
                mili={this.state.mili} />
            </div>
        )
    }
}

export default Watch;