import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import ProjectsProvider from './context/ProjectsProvider';
import InDevelopment from './pages/InDevelopment';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/projects/:project"
          render={(props) => <Project {...props} />}
        />
        <Route path="/projects" component={ProjectsProvider} />
        <Route path="/curriculum" component={InDevelopment} />
        <Route path="/skills" component={InDevelopment} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="*" component={InDevelopment} />
      </Switch>
    );
  }
}

export default App;
