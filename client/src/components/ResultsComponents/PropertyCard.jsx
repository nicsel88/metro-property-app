import React from 'react'
import styles from './PropertyCard.module.css'
import { useState } from 'react'
import TestListing from '../../images/listing - A412-2 Munroe Lane.jpg'
import MapIcon from '../../images/map-icon.png'
import CarIcon from '../../images/car-icon.png'
import BedroomIcon from '../../images/bedroom-icon.png'
import BathroomIcon from '../../images/bathroom-icon.png'
import Line from '../../images/line.png'

const PropertyCard = ({ filter }) => {

  return (
  <>
  <div className={styles.PropertyCardContainer}>
    <div className={styles.ImageAddressContainer}>
      <div className={styles.ListingImage}><img src={TestListing} alt='property image' /></div>
      <div className={styles.MapIconAddressContainer}>
        <img src={MapIcon} alt='property image' />
        <p>52 Black Beech Crescent, Takanini</p>
      </div>
    </div>
    <div className={styles.InfoAndApplyContainer}>
      <div className={styles.InfoAndApplyColoured}>
        <div className={styles.PropertyInfoContainer}>
          <h1>Convenient, modern apartment</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
          <h4>$450 per week</h4>
          <h4>Available:  10 / 10 / 2022</h4>
          <img src={Line} alt='white line' />
          <div className={styles.BedBathCarContainer}>
            <div className={styles.BedBathCarTile}>
              <img src={BedroomIcon} alt='bedroom icon' />
              <p>3</p>
            </div>
            <div className={styles.BedBathCarTile}>
              <img src={BathroomIcon} alt='bathroom icon' />
              <p>2</p>
            </div>
            <div className={styles.BedBathCarTile}>
              <img className={styles.CarIcon} src={CarIcon} alt='car icon' />
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.SaveEnquireApplyContainer}>
        <button className={styles.SaveEnquireApplyButton}>Save</button>
        <button className={styles.SaveEnquireApplyButton}>Enquire</button>
        <button className={styles.ApplyButton}>Apply</button>
      </div>
    </div>
  </div>
  <div>***</div>
  <p>{JSON.stringify(filter)}</p>
  </>
    
  )
}

export default PropertyCard