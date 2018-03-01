import React, { Component } from 'react';

class LogoNName extends Component {
    render() {
        return (
            <div>
                <a href="/" className="header-Logo-n-name">
                    <img src="./Logopictures/react.png"  width="60px" height="60px" alt="text"/>
                    <span className="header-brandText-logo" >
                        NIS ERP Co., Ltd.
                    </span>
                </a>
            </div>
        );
    }
}

export default LogoNName;