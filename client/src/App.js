import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/users/:id" component={Profile}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
