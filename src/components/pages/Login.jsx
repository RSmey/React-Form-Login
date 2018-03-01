import React, { Component } from 'react';

import LoginTittle from '../LoginTittle'
import FacebookButton from '../FacebookButton'
import GoogleButton from '../GoogleButton'
import Twitter from '../TwitterButton'
import TwitterButton from '../TwitterButton';

class Login extends Component {
    render() {
        return (
            <div>
                <LoginTittle/>
                <FacebookButton/>
                <GoogleButton/>
                <TwitterButton/>
            </div>
        );
    }
}

export default Login;