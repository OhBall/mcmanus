import React from 'react';
import Divider from '../divider.jsx';
import Header from '../header.jsx';
import MenuItem from './menu_item.jsx';

import wings from '../../assets/header_images/wings_with_text.png';
import burger_logo from '../../assets/mcm_battleburger_logo_small.jpg';
import tomatoes from '../../assets/eat/tomatoes.jpg';
import sandwich_and_fries from '../../assets/eat/sandwich_and_fries.jpg';
import burger from '../../assets/eat/burger.jpg';
import steak from '../../assets/eat/steak.jpg';
import reuben from '../../assets/eat/reuben.jpg';
import roast_beef from '../../assets/eat/roast_beef.jpg';

export default () => (

  <div className='eat'>
    <Header backgroundImage={wings} headerText='eat'/>
    <Divider text="" background="#020306"/>

    <div className="menu">
      <section>
        <h2>Appetizers</h2>
        <MenuItem 
          name="The Babe's Bowl of Chili" 
          price="10.25" 
          description="topped with melted American cheese & onion"/>
        <MenuItem 
          name="Bruce's Chicken Fingers" 
          price="11.25" 
          description="served with Eileen's spicy horseradish sauce and honey mustard"/>
        <MenuItem
          name="Chicken Wings"
          price="12.25"
          description="with Spicy Buffalo Sauce and Blue Cheese"/>
        <MenuItem
          name="Mozzarella Sticks"
          price="11.25"
          description="fried to perfection, accompanied by marinara sauce"/>
        <MenuItem
          name="Soup du Jour"
          price="Cup/Bowl 6/8.00"
          description="Please ask your server about today's selection"/>

        <img src={tomatoes} alt="burger_battle"/>
        
        <h2>Salads</h2>
        <h4 className="italic">Dressings available: Balsamic Vinaigrette, Caesar, Creamy Italian, Blue Cheese, Honey Mustard, Ranch, Russian</h4>
        <MenuItem
          name="House Salad"
          price="11.95"
          description="tomatoes, carrots, celery, onions, & bell peppers on a bed of romaine"/>
        <MenuItem
          name="Chef Salad"
          price="16.95"
          description="ham, turkey, & assorted cheeses on a house salad"/>
        <MenuItem
          name="Chicken Caesar Salad"
          price="16.95"
          description="classic Caesar salad topped with grilled chicken breast"/>
        <MenuItem
          name="Tuna Salad"
          price="16.95"
          description="with potato salad and coleslaw on our House Salad"/>

        <img src={sandwich_and_fries} alt="sandwich and fries"/>
        
        <h2>Jamo's Club Sandwiches</h2>
        <h4 className="italic">Triple Deckers on Toast with Lettuce, Tomato, Bacon, & Mayo served with Steak Fries or Tater Tots</h4>
        <MenuItem
          name="Turkey"
          price="14.25"/>
        <MenuItem
          name="Ham"
          price="14.25"/>
        <MenuItem
          name="Roast Beef"
          price="14.25"/>
        
        <h2>Justin's Grilled Specialties</h2>
        <h4 className="italic">served with our House Steak Fries or Tater Tots</h4>
        <MenuItem
          name="Steak-um Sandwich"
          price="14.25"
          description="roast beef with melted cheese & sautéed onions on a roll"/>
        <MenuItem
          name="Grilled Chicken Sandwich"
          price="15.25"
          description="with our tangy BBQ sauce, bacon and cheddar"/>
        <MenuItem
          name="Grilled Cheese"
          price="9.25"/>
        <MenuItem
          name="Grilled Ham & Cheese"
          price="11.25"/>
        <MenuItem
          name="Grilled Cheese & Bacon"
          price="11.25"/>
        <MenuItem
          name="Bacon, Lettuce, & Tomato"
          price="10.25"/>
        <MenuItem
          name="Tasha's Tuna Melt"
          price="13.25"/>
      </section>

      <section>
        <h1>Voted the Best Burger in New York City!</h1>
        <img src={burger_logo} alt="burger"/>
        <img src={burger} alt="burger"/>

        <h2>McManus' Chelsea-Burgers</h2>
        <h4 className="italic">All Burgers are served with Steak Fries or Tater Tots<br/>Our cheese Options are American, Cheddar, Swiss, Mozzarella, and Muenster</h4>
        <MenuItem
          name="Classic Hamburger"
          price="12.75"
          description="1/2 lb. all-beef patty with bacon, onion, & tomato"/>
        <MenuItem
          name="Cheeseburger"
          price="13.75"
          description="16.75"/>
        <MenuItem
          name="Pop Pop's Top-Shelf Cheeseburger"
          price="16.75"
          description="1/2 lb, shortrib, brisket, and chuck blend with aged cheddar,
          red onion, pickle, and fancy sauce"/>
        <MenuItem
          name="Pizzaburger"
          price="14.25"
          description="our Hamburger with mozzarella & pizza sauce"/>
        <MenuItem
          name="Chiliburger"
          price="16.25"
          description="our Hamburger topped with Babe's Chili, cheese, & onion"/>
        <MenuItem
          name="Garden Burger"
          price="11.25"
          description="a delicious vegetarian option"/>

        <img src={steak} alt="steak"/>

        <h2>Pete's Hot Plates</h2>
        <MenuItem
          name="N.Y. Strip Steak"
          price="26.95"
          description="with house salad, vegetable of the day, & fries or mashed potatoes"/>
        <MenuItem
          name="Pork Chops"
          price="22.95"
          description="with house salad, vegetable of the day, & fries or mashed potatoes"/>
        <MenuItem
          name="Lamb Chops"
          price="25.95"
          description="with house salad, vegetable of the day, & fries or mashed potatoes"/>
        <MenuItem
          name="Fresh Roasted Turkey"
          price="16.95"
          description="with vegetable of the day & fries or mashed potatoes"/>
        <MenuItem
          name="Roast Beef"
          price="16.95"
          description="with vegetable of the day & fries or mashed potatoes"/>
        <MenuItem
          name="Knockwurst"
          price="14.95"
          description="with authentic fennel sauerkraut & baked beans"/>
        <h3>Try the Knockwurst “Carlito’s Way” with melted Cheese and Bacon! for $2 more</h3>
        <div className="fancy">Ask about our Daily Specials!</div>
      </section>

      <section>
        <h2>Deli Sandwiches</h2>
        <h4 className="italic">Choice of Rye, Wheat, White, Wrap or Roll<br/>served with Potato Salad or Cole Slaw, French Fries,<br/>or Tater Tots<br/>Add Cheese to any Sandwich + $2<br/>Substitute Salad or Onion Rings for Side + $2"}</h4>
        <img src={reuben} alt="reuben"/>
        <MenuItem
          name="McManus' Reuben"
          price="15.25"
          description="Pastrami & Corned Beef parted by Sauerkraut, Swiss, Rye,
          & Russian Dressing served with our Steak Fries or Tater Tots"/>
        <MenuItem
          name="Roast Beef"
          price="12.25"/>
        <MenuItem
          name="Fresh Turkey Breast"
          price="12.25"/>
        <MenuItem
          name="Howie's Hot Pastrami"
          price="12.25"/>
        <MenuItem
          name="Hot Corned Beef"
          price="12.25"/>
        <MenuItem
          name="Tuna Salad"
          price="11.25"/>
        <MenuItem
          name="Ham"
          price="11.25"/>
        <MenuItem
          name="Law's Liverwurst and Onions"
          price="12.25"/>

        <img src={roast_beef} alt="roast beef"/>

        <h2>Side Orders</h2>
        <MenuItem
          name="Steak Fries / Cheese Fries"
          price="6.50 / 8.50"/>
        <MenuItem
          name="Small House Salad"
          price="7.25"/>
        <MenuItem
          name="Chili Cheese Fries / Tots"
          price="12.25"/>
        <MenuItem
          name="Onion Rings"
          price="8.25"/>
        <MenuItem
          name="Tater Tots / Cheese Tots"
          price="7.25 / 9.25"/>
        <MenuItem
          name="House-Made Cole Slaw"
          price="4.50"/>
        <MenuItem
          name="Billy's Boston Baked Beans"
          price="4.50"/>
        <MenuItem
          name="The Ol' Man's Sauerkraut"
          price="4.50"/>
        <MenuItem
          name="House-Made Potato Salad"
          price="4.50"/>
        
        <h2>Desserts</h2>
        <MenuItem
          name="Double Chocolate Cake"
          price="7.95"/>
        <MenuItem
          name="Sweet Katie’s Apple Pie"
          price="7.95"/>
      </section>
    </div>
  </div>

)
