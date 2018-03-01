import React, { Component } from 'react';
import LogoNName from '../LogoNName'
import CompanyReactName from '../CompanyReactName'
import ContentLinks from '../ContentLinks'

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <LogoNName/>
                <CompanyReactName/>
                <ContentLinks/>
            </div>
        );
    }
}

export default Header;