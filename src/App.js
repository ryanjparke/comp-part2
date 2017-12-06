import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Components/Login/Login';
import Browsing from './Components/Browsing/Browsing';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Animal from './Components/Animal/Animal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <Switch>
          <Route exact path='/' render={ Login } />
            <Route component={ Browsing } path='/browsing' />
            <Route component={ Details } path='/details' />
            <Route component={ Cart } path='/cart' />
            <Route component={ Animal } path='/animal' />
            </Switch>
            </Router>
        
      </div>
    );
  }
}

export default App;
