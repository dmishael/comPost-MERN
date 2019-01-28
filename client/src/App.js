import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Profile from './components/Profile';
import { Link } from 'react-router-dom';
import UserForm from './components/AddUserForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div>
                <Link to="/users">Users</Link>
                <Link to="/userForm">Sign Up</Link>
        </div>
          <Switch>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/userForm" component={UserForm}/>
            <Route exact path="/users/:id" component={Profile}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
