import React, { Component } from 'react';
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import {Route, Switch} from 'react-router-dom'

class Body extends Component {
    render() {
        return (
            <div className="body-container">
                <Switch>
                    <Route exact path='/' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/login' component={Login}/>
                </Switch>

            </div>
        );
    }
}

export default Body;