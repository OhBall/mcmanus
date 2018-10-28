import React from 'react';
import { Link } from 'react-router-dom';
import BestBurger from './best_burger.jsx';

import stool from '../assets/stool.jpg';

class Index extends React.Component {



  render(){
    return (
      <div className="index">
        <div className="stool" style={{ backgroundImage: `url(${stool})`, height: "619px"}}>
          <section>
            New York City's local bar
            <span>
              {"Serving Fine Food with \n Good Spirits for 4 generations"}
            </span>
          </section>
        </div>
        <BestBurger/>
      </div>

    );
  }
}

export default Index;
