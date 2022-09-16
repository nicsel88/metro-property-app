import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/ResultsComponents/NavBar'
import ListingsTable from './pages/Results/ListingsTable'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
      <div className="App">
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path='/listings/list' element={ <ListingsTable/> } />
              </Routes>
          </BrowserRouter>
      </div>
    );
}

export default App