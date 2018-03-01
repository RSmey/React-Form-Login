import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './stylesheet/styleform.css'

import Header from './components/sections/Header'
import Body from './components/sections/Body'
import Footer from './components/sections/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <Body/>
        <Footer/>

      </div>
    );
  }
}

export default App;
