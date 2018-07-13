import React,{ Component } from 'react';

import eventProxy from './eventProxy';

class child2 extends Component{
    state = {
        msg: 'start'
    }
    componentDidMount() {
        eventProxy.on('msg',(msg) => {this.setState({ msg })});
    }
    render() {
        return(
            <div>
                msg: {this.state.msg}
            </div>
        )
    }
}

export default child2;