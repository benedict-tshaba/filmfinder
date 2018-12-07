import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Films from './components/films/Films';
import Details from './components/films/Details';

import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename="/filmfinder">
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/films" component={Films} /> 
                <Route exact path="/films/film/:id" component={Details} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
