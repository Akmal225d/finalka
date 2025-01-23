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


const App = () => {
  return (
  <>
  <Header/>
<Hero/>
<Future/>
<London/>
<Menu/>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  
  </>
  )
}

export default App
