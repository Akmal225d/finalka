import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import About from './pages/About'

import Ceramics1 from './components/Ceramics/Ceramics1'
import Chairs1 from './components/Chairs1/Chairs1'
import Tableware1 from './components/Tableware1/Tableware1'
import Cutlery1 from './components/Cutlery1/Cutlery1'
import Tables1 from './components/Tables1/Tables1'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Ceramics1' element={<Ceramics1 />} />
        <Route path='/Tables1' element={<Tables1/>}/>
        <Route path='/chairs' element={<Chairs1/>} />
        <Route path='/tableware' element={<Tableware1/>} />
        <Route path='/cutlery' element={<Cutlery1/>} />
      </Routes>

    </>
  )
}

export default App
