import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/portfolio" />
        <Route path="/curriculum" />
        <Route path="/services" />
        <Route path="/contact" />
        <Route path="/about" component={ About } />
      </Switch>
    </>
  );
}

export default App;
