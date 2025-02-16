import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import About from './pages/About'
import Hero from './components/Hero/Hero'
import Future from './components/Future/Future'
import London from './components/London/London'
import Menu from './components/Menu/Menu'
import Ceramics1 from './components/Ceramics/Ceramics1'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'


const App = () => {
  return (
  <>
 
  <Header/>
  <BurgerMenu/> 
<Hero/>
<Future/>
<London/>
<Menu/>
<BurgerMenu/>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/ceramics' element={<Ceramics1/>}/>
  </Routes>
  
  </>
  )
}

export default App
