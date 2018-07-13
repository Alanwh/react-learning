import React,{ Component } from 'react';

class BindEvent extends Component {
    state = {
        count: 0,
        buttonText: '点击'
    }
    addCount = () => {
        this.setState(
            {
                count: this.state.count+2
            }
        )
    }
    minusCount() {
        console.log(this);
        this.setState(
            {
                count: this.state.count-1
            }
        )
    }
    changeInput = e => {
        console.log(e.target.value);
        this.setState(
            {
                msg: e.target.value
            }
        )
    }
    constructor(props) {
        super(props);
        this.state.time = new Date();
    }
    render() {
        return(
            <div>
                <input type="button" value={this.state.buttonText} onClick={this.addCount} onMouseEnter={this.minusCount.bind(this)}/>
                <br/>
                你点击了{this.state.count}次按钮
                <br/>
                <input type="button" value={this.state.buttonText} ref='button' />
                <br/>
                <input type="text" value={this.msg} onChange={this.changeInput}/>
            </div>
        )
    }
    componentDidMount() {
        this.refs.button.addEventListener('click',()=>{
            this.setState({
                count:this.state.count + 10
            })
        })
    }
}

export default BindEvent;