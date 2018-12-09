import React from 'react';
import mcmLogo from '../assets/mcm_logo_round.png';

export default ({backgroundImage, headerText=''}) => (
  <header className='header' style={{backgroundImage: `url(${backgroundImage})`}}>
    <img className='logo' src={mcmLogo} alt="logo"/>
    <h1>{headerText}</h1>
  </header>
);
