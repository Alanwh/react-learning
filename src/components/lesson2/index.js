import React,{ Component } from 'react';

import Child from './child_1';
import Parent from './eventProxy/parent';

class App extends Component {
    state = {
        msg: '我是父元素的内容'
    }
    transforMsg(msg) {
        this.setState({msg});
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                msg: '父元素的内容改变'
            })
        },1000);
    }
    render() {
        return(
            <div>
                <Child msg={this.state.msg} transforMsg={msg => this.transforMsg(msg)} />
                <hr/>
                <Parent />
            </div>
        )
    }
}

export default App;