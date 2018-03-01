import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className="button-controller-body">
                <a className={'login-button'+ this.props.loginStyleBy} href="/login/facebook">
                    <svg className="login-icon" width="30" height="30"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d={this.props.iconText}>
                        </path>
                        
                    </svg>
                    <span>
                        Log in with {this.props.loginBy}
                    </span>
                </a>
            </div>
        );
    }
}

export default Button;