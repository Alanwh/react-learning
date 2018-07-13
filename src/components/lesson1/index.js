import React from 'react';
import Clock from './clock/clock';

// jsx语法 -> 用 花括号 把任意的 JavaScript 表达式 嵌入到 JSX 中
const user = {
    'name': 'alan',
    'age': 12
};
function intr(data) {
    if(data) {
        return `my name is ${ data.name },my age is ${ data.age }`;
    }else {
        return `hello Stranger`;
    }
}
const Element1 = () =><h1 tabIndex = "0">hello world! { intr(user) }. </h1>;

// 函数式组件
function Welcome(props) {
    return <h1>我是函数式组件{props.value}</h1>
}
function App() {
    return(
        <div>
            <Welcome value = 'a' />
            <Clock />
        </div>
    ) 
}
function Button(props) {
    return React.createElement('button',{type:'submit'},props.label);
}
const ErrorBox = ({msg}) => <div style={{color:'red',fontWeight: 'bold'}}>{ msg }</div>  ;
const Map = ({arr = [1,2,3]}) => <span>{arr}</span>
// JavaScript 类创建组件
class MyBotton extends React.Component{
    clickCounter = 0;
    constructor(props) {
        super(props);
        this.id = Date.now().toString();
    }
    // 自定义原型并使用
    handClick = ()=> {
        console.log(`clicked:${++this.clickCounter}`);
    }
    render() {
        return(
            <button id={this.id} onClick={this.handClick}>{this.props.label}</button>
        )
    }
}
// 类组件私有状态
class CounterButton extends React.Component{
    state = {
        clickCounter: 0,
        currentTime: new Date()
    }
    handClick = () => {
        this.setState((prevState)=>{
            return { clickCounter: prevState.clickCounter + 1 };
        })
    }
    constructor() {
        super()
        console.log('constructor');
    }
    componentDidMount() {
        console.log('componentDidMount');
        setInterval(()=>{this.setState({currentTime: new Date()})},1000)
    }
    render() {
        return(
            <div>
                <button onClick={this.handClick}>click</button>
                <div>clickCounter: {this.state.clickCounter}</div>
                <div>currentTime: {this.state.currentTime.toLocaleString()}</div>
            </div>    
        )
    }
}
const Form = React.createElement(
    'form',
    {action:'#'},
    React.createElement('input',{placeholder:'input something ...'}),
    React.createElement(Button,{label:'save'}),
    <Element1 />,
    <App />,
    <ErrorBox msg='Failed to load resource: net::ERR_FAILED' />,
    <Map />,
    <MyBotton label='save'/>,
    <CounterButton />
);

export default Form;

