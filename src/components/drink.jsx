import React from 'react';

import Divider from './divider.jsx';
import Header from './header.jsx';
import glasses from '../assets/header_images/upturned_glasses.jpg';
import wine from '../assets/wine.jpg';


export default () => (
  <div className='drink'>
    <Header backgroundImage={glasses} headerText='drink'/>
    <Divider text=" You Would expect a historic bar to have a historically good whiskey list, and you would be right!"/>
    <div className='menu'>
      <section>
        <h3>Whiskey</h3>
        <h4>American</h4>
          <ul>
            <li>Blanton's</li>
            <li>Belleit</li>
            <li>Bulleit Rye</li>
            <li>Eagle Rare</li>
            <li>George Dickel Rye</li>
            <li>Hatfield & McCoy</li>
            <li>Jack Daniel's</li>
            <li>Jack Daniel's Gentleman Jack</li>
            <li>Jim Beam</li>
            <li>Jim Beam Black</li>
            <li>Jim Beam Devil's Cut</li>
            <li>Knob Creek</li>
            <li>Knob Creek Rye</li>
            <li>Maker's Mark</li>
            <li>Maker's Mark 46</li>
            <li>Maker's Mark Cask Strength</li>
            <li>Templeton Rye</li>
            <li>Wild Turkey 81 DEGREES</li>
            <li>Wild Turkey 101 DEGREES</li>
            <li>Woodford Reserve</li>
          </ul>
          <h4>Scotch</h4>
          <ul>
            <li>Aberlour Single Malt 12yr</li>
            <li>Chivas Regal 12yr</li>
            <li>Chivas Extra</li>
            <li>Dewars</li>
            <li>Dewars 12yr</li>
            <li>Glenfiddich 12yr</li>
            <li>Glenfiddich 18yr</li>
            <li>Glenmorangie</li>
            <li>Johnny Walker Black</li>
            <li>Johnny Walker Red</li>
            <li>Laphroaig 10yr</li>
            <li>MacCallen 12yr</li>
            <li>Oban 14yr</li>
            <li>The Glenlivet 12yr</li>
            <li>The Glenlivet 18yr</li>
          </ul>
      </section>
      <section>
        <h3>. . .</h3>
        <h4>Irish</h4>
        <ul>
          <li>2 Gingers</li>
          <li>Bushmills</li>
          <li>Bushmills Black Bush</li>
          <li>Clontarf</li>
          <li>Concannon</li>
          <li>Connemara</li>
          <li>Donegal</li>
          <li>Greenspot</li>
          <li>Jameson</li>
          <li>Jameson 12yr</li>
          <li>Jameson 18yr</li>
          <li>Jameson Black Barrel</li>
          <li>Jameson Gold Reserve</li>
          <li>Kellen</li>
          <li>Kilbeggan</li>
          <li>Knappogue Castle 12yr</li>
          <li>Midleton Very Rare</li>
          <li>Paddy</li>
          <li>Powers</li>
          <li>Redbreast 12yr</li>
          <li>Redbreast 15yr</li>
          <li>Teeling Small Batch</li>
          <li>Tullamore Dew</li>
          <li>Tullamore Dew Single Malt</li>
          <li>Tullamore Dew Special REserve</li>
          <li>Tullamore Dew Phoenix</li>
          <li>The Irishman Single Malt</li>
          <li>Yellow Spot</li>
        </ul>

        <h4>World</h4>
        <ul>
          <li>Canadian Club</li>
          <li>Crown Royal</li>
          <li>Nikka</li>
          <li>Seagrams 7</li>
          <li>Seagrams V.O.</li>
          <li>Suntory Hakushu 12yr</li>
          <li>Suntory Hibiki 12yr</li>
          <li>Suntory Yamazaki 12yr</li>
          <li>Suntory Yamazaki 18yr</li>
        </ul>
      </section>
      <section>
        <h3>Beer</h3>
        <h4>Draught</h4>
        <span>Draught beers in Pint or Pitcher</span>
        <ul>
          <li>Bass</li>
          <li>Blue Moon</li>
          <li>Brooklyn IPA</li>
          <li>Budweiser</li>
          <li>Coors Light</li>
          <li>Guinness</li>
          <li>Heineken</li>
          <li>Magners Cider</li>
          <li>McManus Ale</li>
          <li>Sam Adams</li>
          <li>Sam Adams Seasonal</li>
          <li>Stella Artois</li>
          <li>Yuengling</li>
        </ul>
        <h4>Bottled</h4>
        <ul>
          <li>Amstel Light</li>
          <li>Becks</li>
          <li>Becks Non Alcoholic</li>
          <li>Budweiser</li>
          <li>Bud Light</li>
          <li>Coors Light</li>
          <li>Corona Extra</li>
          <li>Gosling's Ginger Beer</li>
          <li>Heineken LIght</li>
          <li>Michelob Ultra</li>
          <li>Miller High Life</li>
          <li>Miller LIght</li>
          <li>Omission(Gliten-free)</li>
          <li>Rolling Rock</li>
          <li></li>
        </ul>
        <img className="wine" src={wine} alt="wine"/>
        <h3>Wine</h3>
        <span>We offer a variety of wines that change with the seasons</span>
      </section>
    </div>
  </div>
)
