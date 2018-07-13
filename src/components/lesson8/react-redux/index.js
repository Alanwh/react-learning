import React,{ Component } from 'react';
import Header from './Header';
import Content from './Content';
// import PropTypes from 'prop-types';
import './css/index.css';

// import createStore from './store';
import { createStore } from 'redux';
import themeReducer from './reducer';

// import { Provider } from './react-redux'
import { Provider } from 'react-redux'

const store = createStore(themeReducer);

class App extends Component {
    // static childContextTypes = {
    //     store: PropTypes.object
    // }

    // getChildContext() {
    //     return { store }
    // }

    render() {
        return(
            <Provider store = { store }>
                <div>
                    <Header />
                    <Content />
                </div>
            </Provider>
        )
    }
}

export default App;