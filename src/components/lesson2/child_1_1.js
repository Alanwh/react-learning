import React,{ Component } from 'react';

class Child_1_1 extends Component{
    componentDidMount() {
        setTimeout(()=>{
            this.props.transforMsg("I'm a child & child message!");
        },3000)
    }
    render() {
        return(
            <div>{this.props.msg}</div>
        )
    }
}

export default Child_1_1;