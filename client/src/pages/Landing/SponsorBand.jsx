import React from 'react'
import './SponsorBandStyle.css';
import BandImg1 from './Images/bandImg1.png';
import BandImg2 from './Images/bandImg2.png';
import BandImg3 from './Images/bandImg3.png';
import BandImg4 from './Images/bandImg4.png';

function SponsorBand() {
  return (

    <div className='Band-Sec'>
        <img src={BandImg1} className='Brand-Image1' alt=''/>
        <img src={BandImg2} className='Brand-Image2' alt=''/>
        <img src={BandImg3} className='Brand-Image3' alt=''/>
        <img src={BandImg4} className='Brand-Image4' alt=''/>
    </div>
    
  )
}

export default SponsorBand;