import React, { Component } from 'react';
// import App from './demo1/app';
import App from './demo2/index';

class Demo extends Component {
    constructor () {
        super()
        this.state = {
            themeColor : 'red'
        }
    }
    render () {
        return (
            <div>
               <App />
            </div>
        )
    }
}

export default Demo;