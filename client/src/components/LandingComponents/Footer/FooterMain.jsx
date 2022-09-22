import React from 'react'
import './FooterStyle.css'
import Line from './Line.jpg';
import Facebook from './Facebook.png';
import Twitter from './Twitter.png';
import LinkedIn from './LinkedIn.png';
import Instagram from './Insta.png';

function FooterMain() {
  return (
    <div className='Footer-Sec'>
        <div className='ContactUs'>
            <h3 className='contact'>Contact Us</h3>
            <img src={Line} className="line"/>
        </div>

        <div className='Be-Social'>
            <h3 className='social'>Be Social</h3>
            <img src={Line} className="line2"/>
        </div>

        <div className='footer-info-sec'>
            <div className='address-cont-footer'>
                <p className='address'>Level 17, PWC Building Commercial Bay Tower, </p> <p> 11-19 Customs Street West, Auckland CBD 1010, New Zealand</p>
                <p className='pobox'>P.O. Box 106500, Customs Street, AUCKLAND 1010, NEW ZEALAND</p>
                <p className='phone'>Phone: 09 391 4642  </p>
                <p className='phone2'>International: +64 21 642 119</p>
                <p className='email'>Email: info@metronz.co.nz</p>
            </div>

        </div>

        <div className='socialImg-sec'>
            <img src={Facebook} className="fb" alt="Facebook icon"/>
            <img src={Twitter} className="tweet" alt='Twitter icon'/>
            <img src={LinkedIn} className="linked" alt='LinkedIn icon'/>
            <img src={Instagram} className="insta" alt='Instagram icon'/>
        </div>
      
    </div>
  )
}

export default FooterMain;
