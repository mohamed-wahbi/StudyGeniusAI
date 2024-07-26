import React from 'react'
import './App.css'
import NavbarTop from './Components/NavbarTop/NavbarTop'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './Assets/logo.png'
import NavbarBottom from './Components/NavbarBottom/NavbarBottom';
import HeaderCarocel from './Components/HeaderCarocel/HeaderCarocel';
import WelcomeMessage from './Components/WelcomeMessaqe/WelcomeMessage';
import WhyAcademicsWorks from './Components/Why Academics Works/WhyAcademicsWorks';

const App = () => {
  return (
    <div className='home'>
      <NavbarTop />
      <NavbarBottom />
      <HeaderCarocel />
      <WelcomeMessage />
      <WhyAcademicsWorks />
    </div>
  )
}

export default App
