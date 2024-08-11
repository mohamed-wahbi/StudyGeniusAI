import React from 'react'
import './App.css'
import NavbarTop from './Components/NavbarTop/NavbarTop'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './Assets/logo.png'
import NavbarBottom from './Components/NavbarBottom/NavbarBottom';
import HeaderCarocel from './Components/HeaderCarocel/HeaderCarocel';
import WelcomeMessage from './Components/WelcomeMessaqe/WelcomeMessage';
import WhyAcademicsWorks from './Components/Why Academics Works/WhyAcademicsWorks';
import Formation from './Components/Formations/Formation';
import BenificOfIntegration from './Components/BenificOfIntegrations/BenificOfIntegration';
import AboutOurUniversity from './Components/AboutOurUniversity/AboutOurUniversity';
import AboutFormation from './Components/AboutFormations/AboutFormation';
import NewsAndVideos from './Components/NewsAndViseos/NewsAndVideos';
import Avie from './Components/Avies/Avie';

const App = () => {
  return (
    <div className='home'>
      <NavbarTop />
      <NavbarBottom />
      <HeaderCarocel />
      <WelcomeMessage />
      <WhyAcademicsWorks />
      <BenificOfIntegration />
      <Formation />
      <AboutFormation />
      <AboutOurUniversity />
      <NewsAndVideos />
      <Avie />
      
    </div>
  )
}

export default App
