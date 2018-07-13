import React,{ Component } from 'react';
 
// export function createStore (state, stateChanger) {
//     const getState = () => state
//     const dispatch = (action) => stateChanger(state, action)
//     return { getState, dispatch }
// }
function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      stateChanger(state, action)
      listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
  }
  
function stateChanger (state, action) {
      switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
          state.title.text = action.text
          break
        case 'UPDATE_TITLE_COLOR':
          state.title.color = action.color
          break
        default:
          break
      }
  }

const appState = {
    title: {
      text: 'this is title',
      color: 'red',
    },
    content: {
      text: 'this is content',
      color: 'blue'
    }
}

function renderApp (newAppState, oldAppState = {}) {
    if (newAppState === oldAppState) return; // 数据没有变化就不渲染了
    console.log('render app...');
    renderTitle(newAppState.title);
    renderContent(newAppState.content);
}
  
function renderTitle (newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return; // 数据没有变化就不渲染了
    console.log('render title...');
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}
  
function renderContent (newContent, oldContent = {}) {
    if (newContent === oldContent) return; // 数据没有变化就不渲染了
    console.log('render content...');
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

// function dispatch (action) {
//     switch (action.type) {
//       case 'UPDATE_TITLE_TEXT':
//         appState.title.text = action.text
//         break
//       case 'UPDATE_TITLE_COLOR':
//         appState.title.color = action.color
//         break
//       default:
//         break
//     }
// }
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' });
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' });

const store = createStore(appState, stateChanger);
let oldState = store.getState(); // 缓存旧的 state
store.subscribe(() => {
    const newState = store.getState() // 数据可能变化，获取新的 state
    renderApp(newState, oldState) // 把新旧的 state 传进去渲染
    oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
})
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' });
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' });
class App extends Component {
    render() {
        return(
            <div>
                <div id='title'></div>
                <div id='content'></div>
            </div>
        )
    }
    componentDidMount() {
        // renderApp(appState);
        // setTimeout(()=>{
        //     appState.title.color = 'blue';
        //     renderApp(appState);
        // },1000)

        renderApp(store.getState()) // 首次渲染页面
        // store.subscribe(() => renderApp(store.getState()));// 联动监听
    
        // setTimeout(()=>{
        //     renderApp(store.getState());
        // },1000)
    }
}

export default App;