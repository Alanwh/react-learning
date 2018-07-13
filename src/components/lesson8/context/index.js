import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/header';
import Main from './components/main/main';
import './css/app.css';

class App extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      themeColor: 'red'
    }
  }

  getChildContext() {
    return {
      themeColor: this.state.themeColor
    }
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