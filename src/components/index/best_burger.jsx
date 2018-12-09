import React from 'react';
import { Link } from 'react-router-dom';

import burgerBattle from '../../assets/mcm_battleburger_logo.jpg';
import chelseaBurger from '../../assets/mcmanusburger.jpg';
import mcmFriends from '../../assets/nygo_hotplate_mcmanus2.jpg';

class BestBurger extends React.Component {
  render() {
    return (
      <div className="burger">
        <img src={burgerBattle} alt="Battle of the Burger"/>
        <a href="https://www.timeout.com/newyork/blog/and-the-winner-of-battle-of-the-burger-is-081916">
          Judge's Choice Award 2016
        </a>
        <div className="burger-images">
          <img src={chelseaBurger} alt="Chelsea Burger"/>
          <img src={mcmFriends} alt="Chelsea Burger"/>
        </div>
        <p  className="blurb">
          Fifty restaurants competed and <a href="http://www.petermcmanuscafe.com/peter-mcmanus-caf%C3%A9-about-history.html">Peter McManus Café</a> has emerged victorious! <a href="https://www.timeout.com/newyork/blog/meet-the-20-vendors-at-time-out-new-yorks-2016-battle-of-the-burger-081616">Twenty finalists</a> duked it out in the Battle of the Burger at the South Street Seaport, but after two rouns of blind taste-testing by Time Out New York's panel of judges the Chelsea Burger was crowned the champion. Close to 2,000 burger lovers showed up to watch the showdown, drink beer, sway to the live performances onstage, and of course, try out all the burgers their bellies could handle while the judges deliberated. Peter Mcmanus Café made mincemeat of the competition!
          <br/>
          <a href="https://www.metro.us/new-york/hot-plate-peter-mcmanus-cafe-is-the-new-king-of-nyc-burgers/zsJphy---WB5f3I9MXCaE">(See METRO's coverage of the burger smackdown.)</a>
        </p>
      </div>
    );
  }
}

export default BestBurger;
