import React from 'react';
import ReactDOM from 'react-dom';

// import Form from './components/lesson1/index';
// import App from './components/lesson2/index';
// import LifeCycle from './components/lesson3/index';
// import BindEvent from './components/lesson4/index';
// import PageRouter from './components/lesson5/index';
// import Fetch from './components/lesson6/index';
// import Demo from './components/lesson7/index';
// import App from './components/lesson8/context/index';
// import App from './components/lesson8/redux/index';
import App from './components/lesson8/react-redux/index';


// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './components/lesson9/reducers/index'
// import App from './components/lesson9/components/App'
// const store = createStore(rootReducer)

ReactDOM.render(
    <App />,
    // <Provider store={store}>
    //     <App />
    // </Provider>,
    document.getElementById('root')
);

