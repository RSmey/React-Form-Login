import React, { Component } from 'react';

import LoginTittle from '../LoginTittle'
import FacebookButton from '../FacebookButton'

class Login extends Component {
    render() {
        return (
            <div>
                <LoginTittle/>
                <FacebookButton/>
            </div>
        );
    }
}

export default Login;