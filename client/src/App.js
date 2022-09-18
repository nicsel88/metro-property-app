import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/ResultsComponents/NavBar'
import ListingsTable from './pages/Results/ListingsTable';
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
    return (
      <React.Fragment>
          <BrowserRouter>
            <AuthProvider>
              {/* <NavBar/> */}
              <Routes>
                        {/* //<Route path='/listings/list' element={ <ListingsTable/> } /> */}
                        <Route exact path="/" element={<><Home /></>}/>
                        <Route exact path="/signup" element={<><HeaderMain /><SignUp /></>} />
                        <Route exact path="/login" element={<><HeaderMain /><Login /></>} />
                        <Route exact path="/apply" element={<><HeaderMain /><Apply /></>} />
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
//                   <Route path='/' element={ <Landing/> } />
//                   <Route path='/listings/list' element={ <ListingsTable/> } />
//                   <Route path='/apply' element={ <Apply/> } />
//                   <Route path='/enquire' element={ <Enquire/> } />
//               </Routes>
//           </BrowserRouter>
//       </div>
//     );
// }

// export default App