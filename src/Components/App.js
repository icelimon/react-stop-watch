import React, { Component } from 'react';
import Title from './Title/Title';
import Watch from './Watch/Watch';

import './App.css';

class App extends Component{
    render(){
        return(
            <div className="App">
                <div className="container">
                    <div className="col-8 offset-2">
                        <Title />
                        <Watch />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;