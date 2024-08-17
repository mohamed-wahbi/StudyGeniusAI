import React from 'react'
import './contact.css'
import NavbarTop from '../../Components/NavbarTop/NavbarTop.js'
import NavbarBottom from '../../Components/NavbarBottom/NavbarBottom.js'
import ContactPHeader from '../../Components/Contact-P/ContactPHeader/ContactPHeader.js'
import ContactPSocial from '../../Components/Contact-P/ContactPSocial/ContactPSocial.js'

const Contact = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <ContactPHeader />
      <ContactPSocial />
     
    </div>
  )
}

export default Contact
