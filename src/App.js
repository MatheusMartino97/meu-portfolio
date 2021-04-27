import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Projects from './pages/Projects';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/projects/:project" render={ (props) => <Project { ...props } /> } />
          <Route path="/projects" component={ Projects }/>
          <Route path="/curriculum" />
          <Route path="/technologies" />
          <Route path="/contact" component={ Contact }/>
          <Route path="/about" component={ About } />
        </Switch>
    );
  }
}

export default App;
