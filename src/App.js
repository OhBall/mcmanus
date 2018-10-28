import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/index.jsx'
import './css/reset.css'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/eat">Eat</Link>
            <Link to="/drink">Drink</Link>
            <Link to="/BeMerry">Be Merry</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
          </nav>
          <Route path="/" component={Index}/>
        </div>
      </Router>
    );
  }
}

export default App;
