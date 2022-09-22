import React from 'react'
import Logo from './LogoMain.png';
import './HeaderMainStyle.css';


function HeaderMain() {
  return (
    <div className='NavBarMain'>
        <div className='Logo-Main'>
            <img src={Logo} className='logo-Comp' alt='company logo'/>
        </div>

        <div className='TopNav'>
            <a href="#Home" className='Menu1'>Home</a>
            <a href="#Owners" className='Menu2'>Owners</a>
            <a href="#Tenants" className='Menu3'>Tenants</a>
            <a href="#News" className='Menu4'>News</a>
            <a href="#AboutUs" className='Menu5'>About</a>
            <a href="#Contact" className='Menu6'>Contact</a>
            <a href="#LogIn" className='Menu7'>Log In</a>
        </div>
      
    </div>
  )
}

export default HeaderMain;
