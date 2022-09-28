import React from "react"; 

import {Link} from 'react-router-dom';
import './LandingPageStyle.css';
import FooterMain from "../../components/LandingComponents/Footer/FooterMain";
import HeaderMain from "../../components/LandingComponents/Header/HeaderMain";
import HeroImg from './Images/HeroImg.png';
import Ipsem from './Images/ipsem.jpg';
import Testimonial from './Images/Testimonials.jpg';
import Pillars from './Pillars.jsx';
import SponsorBand from './SponsorBand';
import Dropdown from './filterComp/DropDown.js';
import RentDD from './filterComp/RentDD';
import Bedroom1 from './filterComp/Bedroom1.js';
import Bedroom2 from './filterComp/Bedroom2.js'
import amenities from './Images/amenities.png'




function LandingPage({handleChange,handleSearch}) {


  return (
    <div>
        <header><HeaderMain/></header>
          <body className='body'>
            
          <div className='hero-sec'>
            <img src={HeroImg} className='hero-img' alt='Auckland Skyline'/>
            <div className='searchbox-sec'></div>
            <h3 className='hero-text'>Property Management Auckland - Metro NZ Property Management LTD</h3>

            <div className='container-searchbox' >

              <label for="location" ><p className='location-title'>Location</p></label>
              <input className='loc-search' onChange={handleChange}type="text" name='keyword1'required/>
              
            
              <label for="district"><p className='district-title'>District</p></label>
              <input className='district-search'onChange={handleChange} type="text"  name='keyword2'/> 
            
            
              <Link to={"/listings"} className="search-btn" onClick={handleSearch} >Search</Link>
             
              <div><Dropdown/></div>
              <div><RentDD/></div>
              <div><Bedroom1/></div>
              <div><Bedroom2/></div>
              <div className="ameni-sec"><img src={amenities} className="ameni-img"/></div>
             

            </div>
            
          </div>

          <div className='pillar-section'><Pillars/></div>

          <div className='text-info-pm'>
              <img src={Ipsem} className='text-image' alt=''/>
              <p className='text-pm'>Property Management Services and Appraisals</p>
              <p className='text-pm2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
          </div>

          <div className='appraisal'>
              <p className='app-text-sec1'>Free Property Rental Appraisals</p>
              <p className='app-text-sec2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <button className='appr-btn-sec' >Get an Appraisal</button>
          </div>

          <div><img src={Testimonial} className='testimonial' alt=''/></div>

          <div className='Sponsor-Section'><SponsorBand/></div>

        </body>
        <footer><FooterMain/></footer>
    </div>
  )
}

export default LandingPage;