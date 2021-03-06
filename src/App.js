import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Routes from './views';
import ScrollToTop from './shared/components/ScrollToTop';

import './App.css';

const title = 'Clemens Bros - Independent Filmmakers';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
        <div>
        <Helmet title={title} />
        <Switch>
          {Routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
