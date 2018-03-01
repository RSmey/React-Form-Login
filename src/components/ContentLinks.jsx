import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ContentLinks extends Component {
    render() {
        return (
            <div className="header-content-link">
                <Link to='/'>About</Link>
                <Link to="/contact">Contact</Link>
                <span classNama="header-brand-content-space"> | </span>
                <Link to='/login'>Log In</Link>
                <span classNama="header-brand-content-space"> Or </span>
                <Link to='/login'>Sign Up</Link>
            </div>
        );
    }
}

export default ContentLinks;