import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Index from './components/index/index.jsx';
import Eat from './components/eat/eat.jsx';
import Drink from './components/drink.jsx';
import Footer from './components/footer.jsx';
import BeMerry from './components/be_merry/be_merry.jsx';
import Contact from './components/contact/contact.jsx';

import './css/reset.css'
import './css/App.scss';
import './css/index.scss';
import './css/divider.scss';
import './css/eat.scss';
import './css/drink.scss';
import './css/be_merry.scss';
import './css/contact.scss';

class App extends Component {
  render() {
    console.log("Site design by Liney Li \nSite built by Oliver Ball");

    return (
      <Router>
        <div className="app">
          <nav>
            <NavLink to='/home' activeClassName='selected'>Home</NavLink>
            <NavLink to='/eat' activeClassName='selected'>Eat</NavLink>
            <NavLink to='/drink' activeClassName='selected'>Drink</NavLink>
            <NavLink to='/be-merry' activeClassName='selected'>Be Merry</NavLink>
            <NavLink to='/about' activeClassName='selected'>About</NavLink>
            <NavLink to='/contact' activeClassName='selected'>Contact</NavLink>
          </nav>

          <Route exact path='/' component={Index}/>
          <Route path='/home' component={Index}/>
          <Route path='/eat' component={Eat}/>
          <Route path='/drink' component={Drink}/>
          <Route path='/be-merry' component={BeMerry}/>
          <Route path='/contact' component={Contact}/>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
