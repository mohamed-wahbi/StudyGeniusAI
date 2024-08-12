import React from 'react'
import NavbarTop from '../../Components/NavbarTop/NavbarTop.js'
import NavbarBottom from '../../Components/NavbarBottom/NavbarBottom.js'
import WelcomeMessage from '../../Components/WelcomeMessaqe/WelcomeMessage.js'
import WhyAcademicsWorks from '../../Components/Why Academics Works/WhyAcademicsWorks.js'
import Formation from '../../Components/Formations/Formation.js'
import AboutFormation from '../../Components/AboutFormations/AboutFormation.js'
import AboutOurUniversity from '../../Components/AboutOurUniversity/AboutOurUniversity.js'
import NewsAndVideos from '../../Components/NewsAndViseos/NewsAndVideos.js'
import Avie from '../../Components/Avies/Avie.js'
import Footer from '../../Components/Footer/Footer.js'
import HeaderCarocel from '../../Components/HeaderCarocel/HeaderCarocel.js'
import BenificOfIntegration from '../../Components/BenificOfIntegrations/BenificOfIntegration.js'
const Home = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <HeaderCarocel />
      <WelcomeMessage/>
      <WhyAcademicsWorks />
      <BenificOfIntegration />
      <Formation />
      <AboutFormation />
      <AboutOurUniversity />
      <NewsAndVideos />
      <Avie />
      <Footer />
    </div>
  )
}

export default Home
