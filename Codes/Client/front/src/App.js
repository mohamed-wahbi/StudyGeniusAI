import React from 'react'
import './App.css'
import NavbarTop from './Components/NavbarTop/NavbarTop'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './Assets/logo.png'
import NavbarBottom from './Components/NavbarBottom/NavbarBottom';

const App = () => {
  return (
    <div className='home'>
      <NavbarTop />



      <NavbarBottom />

    </div>
  )
}

export default App
