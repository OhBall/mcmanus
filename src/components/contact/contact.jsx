import React from 'react';
import Header from '../header.jsx';
import Divider from '../divider.jsx';
import Map from './map.jsx';

import rears from '../../assets/header_images/rears.jpg';
import dinner4two from '../../assets/dinner_for_two.jpg';
import sidewalk from '../../assets/sidewalk.jpg';

export default () => {

  return (
    <div className="contact">
      <Header headerText="Drop By" backgroundImage={rears}/>
      <Divider text="Oldest Family-Run Bar in NYC"/>
      <div className="contact-info">
        <section>
          <img src={sidewalk} alt="sidewalk"/>
          <Map />
        </section>
        <section>
          <div>
            <img src={dinner4two} alt="dinner for two"/>
            <p className='big-start'>McManus is the perfect spot for drinks after work, after theater, or even after a breakup.  (Seriously—when you’re down in the dumps, the staff can usually deliver a laugh along with your beer and burger…!)  Great food, great drinks, great people - we’re open late— what are you waiting for?</p>
          </div>
          <div className="info">
            <section>
              <p>
                152 Seventh Avenue
                <br/>         
                (NW corner of 19th St.)
                <br/>
                New York, NY 10011
                <br/>
                212-929-6196
                <br/>
                <a href="mailto:info@mcmanus.nyc">info@mcmanus.nyc</a>
              </p>
              <div className="hours">
                <span>Mon-Sat:</span>
                <span>11:00 am - 4:00 am</span>
                <span>Sunday:</span>
                <span>Noon - 4:00 am</span>
              </div>
            </section>
            <section className="subway">
              <h2>Subway:</h2>
              <span>18 Street  1 (2,3)</span>
              <span>23 Street  1 (2,3)</span>
              <span>14 Street  A, C, E</span>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}