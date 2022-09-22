import React from 'react'
import PMA from './Images/PMA.png';
import OurListing from './Images/Ourlisting.png';
import TenentA from './Images/TenentA.png';
import Change from './Images/change.png';
import './PillarStyle.css';

function Pillars() {
  return (
    <div className='pillar-component'>  
        <div className='pillar-sec1'>
            <img src={PMA} className='pillar-img1' alt=''/>
            <p className='PMA-text'>Property Management Auckland</p>
        </div>
        <div className='pillar-sec2'>
            <img src={OurListing} className='pillar-img2' alt=''/>
            <p className='Olisting-text'>Our Property Listings</p>
        </div>
        <div className='pillar-sec3'>
            <img src={TenentA} className='pillar-img3' alt=''/>
            <p className='Tent-App-Text'>Tenancy Application</p>
        </div>
        <div className='pillar-sec4'>
            <img src={Change} className='pillar-img4' alt=''/>
            <p className='changenz-text'>Change To Metro NZ</p>
        </div>
  </div>
  )
}

export default Pillars;