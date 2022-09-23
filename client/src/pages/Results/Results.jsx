import React from 'react'
import styles from './Results.module.css'

import Header from '../../components/LandingComponents/Header/HeaderMain.jsx'
import Footer from '../../components/LandingComponents/Footer/FooterMain.jsx'
import SearchFilterSort from '../../components/ResultsComponents/SearchFilterSort'
import PropertyCard from '../../components/ResultsComponents/PropertyCard'

const Results = ({ filter, setFilter, handleChange, handleSearch, Listings, handleSort }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
        <SearchFilterSort filter={filter} setFilter={setFilter} handleChange={handleChange} handleSearch={handleSearch} handleSort={handleSort} Listings={Listings}/>
        
        {Listings?.length > 0 ? (
            Listings.map((Listing) => (
                <PropertyCard Listing={Listing} />
            ))   
        ) : (
        <div className="empty">
            <h2 style={{ color: '#3A3B3B', 'font-family': 'Inter', padding: '7rem', 'text-align': 'center' }}>No properties found that match your search.</h2>
        </div>
    )}
        <Footer className={styles.footer} />
      </div>
    </div>
  )
}

export default Results

