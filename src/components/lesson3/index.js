import React,{ Component } from 'react';

class LifeCycle extends Component{
    constructor() {
        super();
        console.log('- 1 -' + 'constructor');
        this.id = 123;
    }
    componentWillMount() {
        console.log('- 2 -' + 'componentWillMount');
    }
    render() {
        console.log('- 3 -' + 'render');
        return(
            <div>生命周期的展示</div>
        )
    }
    componentDidMount() {
        console.log('- 4 -' + 'componentDidMount');
    }
    componentWillReceiveProps() {
        console.log('- 5 -' + 'componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('- 6 -' + 'shouldComponentUpdate');
    }
    componentWillUpdate() {
        console.log('- 7 -' + 'componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('- 8 -' + 'componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('- 9 -' + 'componentWillUnmount');
    }
}

export default LifeCycle;