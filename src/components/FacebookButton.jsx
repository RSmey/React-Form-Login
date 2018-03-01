import React, { Component } from 'react';
 import Button from './Button'

class FacebookButton extends Component {
    render() {
        return (
            <div className="body-facebook-button">
                <Button loginBy="Facebook"
                iconText="M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z"
                loginStyleBy="login-facebook"/>
                    
            </div>
        );
    }
}

export default FacebookButton;