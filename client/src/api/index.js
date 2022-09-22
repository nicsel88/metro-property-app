
const ListingImages = {
    A4122MunroeLane: require('../images/listing-A412-2 Munroe Lane.jpg')
}

export default ListingImages


// var WANTED_STRING = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
// const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
// const result = WANTED_STRING.replace(regex, '');

// console.log(result);




// import axios from 'axios'
// import React from 'react'
// import { useState } from 'react'

// // const Quote = ({ setQuoteData }) => {
// //     const [step, setStep] = useState(1)
// //     const [data, setData] = useState({
// //       make: "", model: "", year: null, enginecap: 2788, business: true, address: "", startdate: "",
// //       d1firstname: "", d1lastname: "", d1gender: "female", d1birthday: "YYYY-MM-DD", d1incidents: true, d1licence: "", d1policyhold: '', email: "", phone: "",
// //       plan: 2, excess: 500, value: 9000, extras: [true, false, true],
// //     })
// // }

// // const getListingsByFilter = async (filterData) => {
    
// //     await axios.post('http://localhost:3000/api/listing/filter', filterData)
// //       .then((response) => {
// //         console.log(response)
// //         //setQuoteData(response.data)
// //         //window.localStorage.setItem('filter', JSON.stringify(response.data));
// //       })
// //       .catch((error) => {console.log(error)})
// //   }


// const api = axios.create({
//     baseURL: 'http://localhost:3000/api',
// })

// //Each of these map to a specific function on the server:
// export const insertListing = payload => api.post(`/listing`, payload)
// // Normally 'payload' structure would be defined somewhere, like we did for the cars QuoteData.
// export const getAllListings = () => api.get(`/listings`)
// export const updateListingById = (id, payload) => api.put(`/listing/${id}`, payload)
// export const deleteListingById = id => api.delete(`/listing/${id}`)
// export const getListingById = id => api.get(`/listing/${id}`)
// export const getListingsByFilter = filterData => api.post(`/listing/filter`, filterData).then((response) => { console.log(response)
// setListings(response.data.data) })
// // // The above code works too (if we comment out other axios await above), BUT must click search button twice.


// // use these functions in front end pages.

// // export const getListingByFilterAndSort = filterAndSort => api.get(`listing/filter-sort`, filterAndSort)
// // 'filterAndSort' will be passed in as the request body.
// // It will contain the filter and sort fields set by the user.
// // Then retrieve on backend with req.body.__
// // The 'API endpoint' is `listing/filter-sort`
// // The 'client endpoint' what the user sees in their web browser.

// // Could instead use the options below to implement sort functionality separate to filter:

// // export const getListingByFilterAndSort = params [suburb, bedrooms] => api.get(`listing/${suburb}-${bedrooms}`, payload)
// // export const getListingByFilterAndSort = payload => api.get(`listing/${filterParams}`, payload)

// // A json can contain a Header, Body, Parameters (params) etc.
// // id is a param in this example and is called in the listings-controller using 'req.param.id'
// // If you 

// const apis = {
//     insertListing,
//     getAllListings,
//     updateListingById,
//     deleteListingById,
//     getListingById,
//     getListingsByFilter,
// }

// export default apis

