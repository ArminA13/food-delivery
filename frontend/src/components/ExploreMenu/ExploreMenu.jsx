import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Welcome to The Biggest Network of Food Ordering & Delivery</p>
        <div className="explore-menu-list"></div>
        {menu_list.map((item, index)=> {
            return(
                <div key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image}/>
                    <p>{item.menu_name}</p>

                </div>
            )
        })}
      
    </div>
  )
}

export default ExploreMenu