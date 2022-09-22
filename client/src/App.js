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
import HeaderMain from './components/LandingComponents/Header/HeaderMain'

// import Landing from './pages/Landing/Landing.jsx';
// import Enquire from './pages/Enquire/Enquire.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './context/AuthContext';
import './App.css';


function App() {

    const [filter, setFilter] = useState({
        rentMin: 0, rentMax: Infinity, bedroomsMin: 0, bedroomsMax: Infinity, bathroomsMin: 0, bathroomsMax: Infinity, carparksMin: 0, carparksMax: Infinity, region: "", district: "", suburb: "", amenities: [], propertyType: [], petsOk: false, availableNow: false
      }) // Sets the default data values.

    //   const [filter, setFilter] = useState({
    //     rentMin: 0, rentMax: Infinity, bedroomsMin: 0, bedroomsMax: Infinity, bathroomsMin: 0, bathroomsMax: Infinity, carparksMin: 0, carparksMax: Infinity, location: {region: "", district: "", city: ""}, amenities: [], propertyType: [], petsOk: true,
    //   })

// e is for 'event'
      const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value }); // 'Name' is the name of variable.
        console.log(e.target.value);
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
                        <Route path='/listings' element={ <Results filter={filter} setFilter={setFilter} handleChange={handleChange}/> } />
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