import React from 'react'
import styles from './PropertyCard.module.css'
import { useState } from 'react'


const PropertyCard = ({ filter }) => {

  return (
  <>
  <div className={styles.PropertyCardContainer}>
    <div className={styles.ImageAddressContainer}>
      <div><img/></div>
      <div>
        <p>Address</p>
      </div>
    </div>

  </div>


  </>
    
  )
}

export default PropertyCard