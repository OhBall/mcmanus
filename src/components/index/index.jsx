import React from 'react';
import BestBurger from './best_burger.jsx';
import Divider from '../divider';

import stool from '../../assets/header_images/stool.jpg';
import logo from '../../assets/mcm_logo_round.png';

export default () => {

  return (
    <div className="index">
      <div className="stool" style={{ backgroundImage: `url(${stool})`, height: "619px"}}>
        <img className="logo" src={logo} alt="mcm_logo"/>
        <section>
          <h1>New York City's local bar</h1>
          <span>
            Serving Fine Food with<br/>Good Spirits for 4 generations
          </span>
        </section>
      </div>
      <Divider
        text="voted best burger in new york city" 
        url="https://www.timeout.com/newyork/news/and-the-winner-of-battle-of-the-burger-is-081718" 
        backgroundColor="white"/>
      <BestBurger/>
      <Divider text="Special Events" />
    </div>

  );
};
