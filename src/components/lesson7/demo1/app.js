import React,{ Component } from 'react';
import Header from './header';
import Main from './main';
import PropTypes from 'prop-types'

class App extends Component {
    static childContextTypes = {
        themeColor:PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            themeColor: 'red'
        }
    }
    getChildContext() {
        return {
            themeColor: 'blue'
        }
    }
    componentWillMount() {
        this.setState({
            themeColor: 'green'
        })
    }
    render() {
        return(
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App;