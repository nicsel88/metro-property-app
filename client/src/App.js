import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/ResultsComponents/NavBar'
import ListingsTable from './pages/Results/ListingsTable'
import Landing from './pages/Landing/Landing.jsx';
import Apply from './pages/Apply/Apply.jsx';
import Enquire from './pages/Enquire/Enquire.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {
    return (
      <div className="App">
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path='/' element={ <Landing/> } />
                  <Route path='/listings/list' element={ <ListingsTable/> } />
                  <Route path='/apply' element={ <Apply/> } />
                  <Route path='/enquire' element={ <Enquire/> } />
              </Routes>
          </BrowserRouter>
      </div>
    );
}

export default App