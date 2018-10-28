import React from 'react';
import { Link } from 'react-router-dom';

class BestBurger extends React.Component {
  render() {
    return (
      <section className="">
        <Link to="https://www.timeout.com/newyork/news/and-the-winner-of-battle-of-the-burger-is-081718">
          {"voted best burger in new york city"}
        </Link>
      </section>
    );
  }
}

export default BestBurger;
