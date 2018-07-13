import React,{ Component } from 'react';
import eventProxy from './eventProxy';

class child1 extends Component{
    componentDidMount() {
        setTimeout(()=>{
            eventProxy.trigger('msg','end');
        },4000)
    }
    render() {
        return(
            <div>
                I'm child2!
            </div>
        )
    }
}

export default child1;