import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import FriendList from './components/FriendList.js';
import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
      <Router>
          <div className="App">
              <header>
                  <Link to="/login">Login</Link>
                  <Link to="/protected">Protected Page</Link>
              </header>
          </div>
          <Switch>
              <PrivateRoute exact path="/protected" component={FriendList} />
              <Route path="/login" component={Login} />
              <Route component={Login} />
          </Switch>
      </Router>
  );
}

export default App;
