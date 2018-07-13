import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch } from 'react-router-dom';
import Home from './Home';
import List from './List';
import Detail from './Detail';

import './css/router.scss';

export default class PageRouter extends Component {
    render() {
        return(
            <Router>
                <div>
                    <ul className='nav'>
                        <li><Link to='/home'>首页</Link></li>
                        <li><Link to='/list'>列表</Link></li>
                        <li><Link to='/detail'>详情页</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/home' component={Home}></Route>
                        <Route path='/list' component={List}></Route>
                        <Route path='/detail' component={Detail}></Route>
                        <Redirect to="/home"/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
