import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/ResultsComponents/NavBar'
import ListingsTable from './pages/Results/ListingsTable'
import Listings from './components/ResultsComponents/SearchFilterSort'
import SearchFilterSort from './components/ResultsComponents/SearchFilterSort'
import Results from './pages/Results/Results'
import Home from './components/HomeComponents/Home'
import Login from './components/SignInComponents/SignIn'
import SignUp from './components/SignUpComponents/SignUp'
import Apply from './components/ApplyComponents/Apply'
import Enquire from './components/EnquiryComponents/Enquiry'
import HeaderMain from './components/LandingComponents/Header/HeaderMain'
import apis from './api/index.js'
import axios from 'axios'


// import Landing from './pages/Landing/Landing.jsx';
// import Enquire from './pages/Enquire/Enquire.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './context/AuthContext';
import './App.css';

// QUICKSORT:

// for/if/else compares the listing's rent component, but pushes the entire listing object inside the Listings array.
// In this case, arr is the Listings array of Listing objects.
// Function keeps running until sort is complete.

function quickSortByRent(arr){

    if(arr.length <2){        
        return arr       
    }        
    let pivot = arr[arr.length-1]        
    let left = []        
    let right = []       
    for(let i=0; i<arr.length-1; i++){       
        if(arr[i].rent<pivot.rent){        
            left.push(arr[i])        
        } else{        
            right.push(arr[i])        
        }
    }
    return[...quickSortByRent(left),pivot,...quickSortByRent(right)]
}


const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})


function App() {

    //Each of these map to a specific function on the server:
    const getListingsByFilter = filterData => api.post(`/listing/filter`, filterData).then((response) => { console.log(response)
    setListings(response.data.data)})

    const [filter, setFilter] = useState({
        keyword: "", rentMin: "Any", rentMax: "Any", bedroomsMin: "Any", bedroomsMax: "Any", bathroomsMin: "Any", bathroomsMax: "Any", carparksMin: "Any", carparksMax: "Any", region: "", district: "", suburb: "", amenities: [], propertyType: [], petsOk: false, availableNow: false
      }) // Sets the default data values.

    //SEARCH FUNCTION:
    //   const getListingById = location => api.get(`/listing/${location}`)

    //   const [filter, setFilter] = useState({
    //     rentMin: 0, rentMax: Infinity, bedroomsMin: 0, bedroomsMax: Infinity, bathroomsMin: 0, bathroomsMax: Infinity, carparksMin: 0, carparksMax: Infinity, location: {region: "", district: "", city: ""}, amenities: [], propertyType: [], petsOk: true,
    //   })

// e is for 'event'
      const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value }); // 'Name' is the name of variable.
        console.log(e.target.value);
      }

      const [Listings, setListings] = useState([]) // Sets the default data values.

// e is for 'event'
      const handleSearch = (e) => {
        console.log(filter);
        setListings(getListingsByFilter(filter)); // 'Name' is the name of variable.
        console.log(Listings);
        
      }

// Quick sort

      const handleSort = (e) => {   
        setListings(quickSortByRent(Listings)); // 'Name' is the name of variable.      
      }
      

    return (
      <React.Fragment>
          <BrowserRouter>
            <AuthProvider>
              {/* <NavBar/> */}
              <Routes>
                        <Route exact path="/" element={<><Home /></>}/>
                        <Route exact path="/signup" element={<><HeaderMain /><SignUp /></>} />
                        <Route exact path="/login" element={<><HeaderMain /><Login /></>} />
                        <Route exact path="/apply" element={<><HeaderMain /><Apply /></>} />
                        <Route exact path="/enquire" element={<><HeaderMain /><Enquire /></>} />
                        <Route path='/listings' element={ <Results filter={filter} setFilter={setFilter} handleChange={handleChange} handleSearch={handleSearch} handleSort={handleSort} Listings={Listings}/> } />
              </Routes>
              </AuthProvider>
          </BrowserRouter>
        </React.Fragment>
    );
}

export default App


// function App() {
//     return (
//       <div className="App">
//           <BrowserRouter>
//               <NavBar/>
//               <Routes>
//                   <Route path='/' element={ <Landing filter={filter} setFilter={setFilter}/> } />
//                   <Route path='/listings/list' element={ <ListingsTable/> } />
//                   <Route path='/apply' element={ <Apply/> } />
//                   <Route path='/enquire' element={ <Enquire/> } />
//               </Routes>
//           </BrowserRouter>
//       </div>
//     );
// }

// export default App