import React from 'react';
import {Link} from 'react-router-dom';

import fbLogo from '../assets/logos/fb_logo.png';
import instaLogo from '../assets/logos/instagram_icon.png';
import twitterLogo from '../assets/logos/twitter_logo.png';

class Footer extends React.Component{

  constructor(){
    super();
    this.state = { 
      name: '',
      email: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(){
    console.log('HIT BACKEND');
  }

  render() {

    return (
      <footer>
        <div className='news-letter'>
              <span>Sign up for new on specials, promotions, and unique events!</span> 
              <form>
                <input 
                  type='text' 
                  placeholder='Enter Name' 
                  onChange={this.handleChange('name')} 
                  value={this.state.text}
                  required/>
                <input 
                  type='text' 
                  placeholder='Enter Email' 
                  onChange={this.handleChange('email')} 
                  value={this.state.email}
                  required/>
              </form>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
        
        <div className="footnotes">
          <section>
            <span>Web design: Liney Li</span>
            <span>Photography © 2016 by Karen Brocke</span>
            <span>Marketing consultant/writer: Eileen O'Connor</span>
            <span>For all creative inquiries: 3eggsonaroll@gmail.com</span>
          </section>

          <section className="follow-us">
            <h3>F o l l o w &nbsp; U s !</h3>
            <div className="social-media">
              <a className="facebook" href="https://www.facebook.com/pages/Peter-McManus-Cafe/319879212077">
                <img src={fbLogo} alt="facebook logo"/>
              </a>
              <a className="twitter" href="https://twitter.com/Mcmanusnyc">
                <img src={twitterLogo} alt="twitter logo"/>
              </a>
              <a className="instagram" href="https://instagram.com/mcmanusnyc/">
                <img src={instaLogo} alt="instagram logo"/>
              </a>
            </div>
          </section>

          <section>
            <span>© 2016 Peter McManus Cafe. Alll Rights Reserved.</span>
          </section>
        </div>
        <div className="info">
          <span>152 Seventh Avenue</span>
          <span>•</span>
          <span>New York City  10011</span>
          <span>•</span>
          <span>212-929-6196</span>
          <span>•</span>
          <span><Link to="/contact">Map & Directions</Link></span>
        </div>
      </footer>

    );
  }
};

export default Footer;
