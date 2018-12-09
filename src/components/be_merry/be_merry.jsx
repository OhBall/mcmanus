import React from 'react';
import Divider from '../divider.jsx';
import Header from '../header.jsx';
import ReservationForm from './reservation_form.jsx';

import hug from '../../assets/header_images/75th_anniversary.jpg';
import flowers from '../../assets/flowers.jpg';
import catering from '../../assets/catering.jpg';


export default () => {
  
  return (
    <div className="be-merry">
      <Header headerText="Be Merry" backgroundImage={hug}/>
      <Divider text="We Love a Party"/>
      
      <section>
        <p>
          Whether it’s a celebratory night out, or just getting together to watch the big game—<br/>
          you’ll feel right at home at McManus.  All are welcome, and though the dining room operates on a first-come, first served basis, with enough notice - we do take reservations for large parties.
        </p>
        <p>
          We can accomodate groups of 12—150, and our event team will happily work with you to tailor the party to your needs.  McManus is the perfect spot for that “Big” birthday celebration, bridal or baby shower, going-away bash, comic-con costume party, company holiday event, or “Just-because-it’s-Wednesday” party.  (Trust us - we’ve done it all!)
        </p>
        <div className="fancy">Thinking Outside the Office!</div>
        <p>Sometimes the conference room just doesn’t cut it.<br/>If your business is located in Chelsea, how about shaking up the routine and holding your weekly morning brainstorming session in the backroom at McManus?<br/>(We can provide coffee, juice and doughnuts...and maybe even inspiration.)</p>
      </section>
      <div className="reservations">
        <img src={flowers} alt="flowers"/>
        <ReservationForm/>
        <img src={catering} alt="catering"/>
      </div>

    </div>
  );
}