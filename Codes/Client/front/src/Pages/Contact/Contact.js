import React from 'react'
import './contact.css'
import NavbarTop from '../../Components/NavbarTop/NavbarTop.js'
import NavbarBottom from '../../Components/NavbarBottom/NavbarBottom.js'
import ContactPHeader from '../../Components/Contact-P/ContactPHeader/ContactPHeader.js'
import ContactPSocial from '../../Components/Contact-P/ContactPSocial/ContactPSocial.js'
import ContactPQuestion from '../../Components/Contact-P/ContactPQuestion/ContactPQuestion.js'
import Footer from '../../Components/Footer/Footer.js'
import AboutTeam from '../../Components/Contact-P/AboutTeam/AboutTeam.js'

const Contact = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <ContactPHeader />
      
      
  
      <ContactPSocial />
       <ContactPQuestion />
      <AboutTeam />   
      <Footer />
    </div>
  )
}

export default Contact
