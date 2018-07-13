import React,{ Component } from 'react';

import Child11 from './child_1_1';

class Child extends Component{
    componentDidMount() {
        setTimeout(() => {
            this.props.transforMsg("I'm a child message!");
        },2000)
    }
    render() {
        return(
            <div>
                {this.props.msg}
                <Child11 {...this.props} />
            </div>
        )
    }
}

export default Child;