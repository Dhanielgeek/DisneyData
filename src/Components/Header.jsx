import React from 'react'
import './style.css'
import logo from '../assets/disney_logo.png'
import searchLogo from '../assets/inc-search.svg'

const Header = () => {
  return (
    <div className='Header'>
        <div className='HeaderLogoNav'>
          <div className='HeaderLogo'>
            <img src={logo} alt="" />
          </div>
          <div className='Nav'>
            <nav>Disney+</nav>
            <nav>Parks & Travel</nav>
            <nav>Movies</nav>
            <nav>Shop</nav>
            <nav>More</nav>
          </div>
        </div>
        <div className='SignSearch'>
            <span>Sign Up</span>
            <div className='Search'>
                <input type="text"  placeholder='Search'/>
                <div className='searchlogo'>
                    <img src={searchLogo} alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Header