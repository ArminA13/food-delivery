import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>
                <img src={assets.headerText}/>
            </h2>
            <p>Get all your loved foods in one once place, you just place the order we do the rest.
                The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. </p>
            <button>View Menu</button>
        </div>
        <div className='header-back'>
            {/* <img className='header-img' src={assets.headerImg}/>  */}
        </div>
    </div>
  )
}

export default Header
