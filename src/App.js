import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound';
import Nav from './components/Nav'

const App = () => {
  return (
    <Router>
      <div className="page-wrapper">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
