import React from 'react'
import styles from './PropertyCard.module.css'
import { useState } from 'react'
import TestListing from '../../images/listing-A412-2 Munroe Lane.jpg'
import MapIcon from '../../images/map-icon.png'
import CarIcon from '../../images/car-icon.png'
import BedroomIcon from '../../images/bedroom-icon.png'
import BathroomIcon from '../../images/bathroom-icon.png'
import Line from '../../images/line.png'
import ListingImages from '../../api/index'

/* <p>{JSON.stringify(Listing)}</p> */

// Path takes us up one level to public, then into public images folder
// React requires 'import' command for all assets, EXCEPT those in public folder.

const PropertyCard = ({ Listing }) => {

var propertyImage = '../images/listing-' + Listing.street_address + '.jpg';
  
  return (
  <>
  <div className={styles.PropertyCardContainer}>
    <div className={styles.ImageAddressContainer}>
      <div className={styles.ListingImage}><img src={propertyImage} alt={propertyImage} /></div>
      <div className={styles.MapIconAddressContainer}>
        <img src={MapIcon} alt='map icon' />
        <p>{Listing.street_address}, {Listing.suburb}</p>
      </div>
    </div>
    <div className={styles.InfoAndApplyContainer}>
      <div className={styles.InfoAndApplyColoured}>
        <div className={styles.PropertyInfoContainer}>
          <h1>{Listing.title}</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
          <h4>${Listing.rent} per week</h4>
          <h4>Available: {Listing.date_available}</h4>
          <img src={Line} alt='white line' />
          <div className={styles.BedBathCarContainer}>
            <div className={styles.BedBathCarTile}>
              <img src={BedroomIcon} alt='bedroom icon' />
              <p>{Listing.bedrooms}</p>
            </div>
            <div className={styles.BedBathCarTile}>
              <img src={BathroomIcon} alt='bathroom icon' />
              <p>{Listing.bathrooms}</p>
            </div>
            <div className={styles.BedBathCarTile}>
              <img className={styles.CarIcon} src={CarIcon} alt='car icon' />
              <p>{Listing.car_parks}</p>
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

  </>
    
  )
}

export default PropertyCard

