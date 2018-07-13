import React,{ Component } from 'react';
import PropTypes from 'prop-types';

const appState = {
    title: {
        text: 'this is title.',
        color: 'red'
    },
    content: {
        text: 'this is content.',
        color: 'blue'
    }
}
/* step.1 */
const renderTitle = (newTitle,oldTitle = {}) => {
    if(newTitle === oldTitle ) return;
    console.log('render title...');
    const titleDom = document.getElementById('title');
    titleDom.innerHTML = newTitle.text;
    titleDom.style.color = newTitle.color;
}
const renderContent = (newContent,oldContent = {}) => {
    if(newContent === oldContent ) return;
    console.log('render content...');
    const contentDom = document.getElementById('content');
    contentDom.innerHTML = newContent.text;
    contentDom.style.color = newContent.color;
}
const renderApp = (newState,oldState = {})=> {
    if(newState === oldState ) return;
    console.log('render app...');
    /* 默认覆盖回调 */
    // renderTitle(newState.title);
    // renderContent(newState.content);
    /* 共享结构回调 */ 
    renderTitle(newState.title,oldState.title);
    renderContent(newState.content,oldState.content);
}

/* step.2 */ 
const dispatch = (action) => {
    switch(action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color;
            break;
        default:
            break;
    }
}


/* step.3 */ 
const createStore = (state,stateChanger) => {
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = ()　=> state;
    const dispatch = (action) => {
        // stateChanger(state,action);
        /* 覆盖原对象 */ 
        state = stateChanger(state,action);
        listeners.forEach((listener)=>listener());
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
const stateChanger = (state,action) => {
    switch(action.type) {
        /* 默认修改原对象 */
        // case 'UPDATE_TITLE_TEXT':
        //     state.title.text = action.text;
        //     break;
        // case 'UPDATE_TITLE_COLOR':
        //     state.title.color = action.color;
        //     break;
        // default:
        //     break;

        /* 共享结构的对象 */ 
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title:{
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title:{
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state;
    }

}
const store = createStore(appState,stateChanger);
let oldState = store.getState() // 缓存旧的 state
store.subscribe(()=> {
    /* 默认覆盖渲染 */
    // renderApp(store.getState());
    /* 共享结构渲染 */ 
    const newState = store.getState() // 数据可能变化，获取新的 state
    renderApp(newState, oldState) // 把新旧的 state 传进去渲染
    oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
});

/* step.4 合并state 和 stateChanger */ 
const reducer = (state,action) => {
    if(!state) {
        return {
            title: {
              text: 'this is title',
              color: 'red',
            },
            content: {
              text: 'this is content',
              color: 'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
          return {
            ...state,
            title: {
              ...state.title,
              text: action.text
            }
          }
        case 'UPDATE_TITLE_COLOR':
          return {
            ...state,
            title: {
              ...state.title,
              color: action.color
            }
          }
        default:
          return state
    }
}
const createStore2 = (reducer) => {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = ()　=> state;
    const dispatch = (action) => {
        state = reducer(state,action);
        listeners.forEach((listener)=>listener());
    }
    dispatch({}) // 初始化 state
    return {
        getState,
        dispatch,
        subscribe
    }
}
class App extends Component {
    componentDidMount() {
        /* step.1 
        * 数据可能被任意修改
        * */
        // renderApp(appState);

        /* step.2
        * 模式不能复用
        * */
        // dispatch({type:'UPDATE_TITLE_TEXT',text:'this is dispatch'});
        // dispatch({type:'UPDATE_TITLE_COLOR',color:'blue'});
        // renderApp(appState);

        /**
         * step.3
         * */ 
        renderApp(store.getState());
        store.dispatch({type:'UPDATE_TITLE_TEXT',text:'this is store.dispatch.'});
        store.dispatch({type:'UPDATE_TITLE_COLOR',color:'green'});
        // renderApp(store.getState());
    }
    
    render() {
        return(
            <div>
                <div id='title'></div>
                <div id='content'></div>
            </div>
        )
    }
}

export default App;