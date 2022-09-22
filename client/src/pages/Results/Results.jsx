import React from 'react'
import styles from './Results.module.css'

// import Header from '../../components/LandingComponents/Header/Header.jsx'
// import Footer from '../../components/LandingComponents/Footer/Footer.jsx'
import SearchFilterSort from '../../components/ResultsComponents/SearchFilterSort'
import PropertyCard from '../../components/ResultsComponents/PropertyCard'

const Results = ({ filter, setFilter, handleChange }) => {
  return (
    <div>

      <SearchFilterSort filter={filter} setFilter={setFilter} handleChange={handleChange} />
      <PropertyCard filter={filter} />

    </div>
  )
}

export default Results