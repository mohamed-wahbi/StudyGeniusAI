import React from 'react'
import './contactPHeader.css'
import { Link } from 'react-router-dom'

const ContactPHeader = () => {
  return (
    <div className='contactPHeader'>
      <div className='contactPHeaderImg'>
        <h3>Contact</h3>
        <p>We are here to informing you for all your questions !</p>
      </div>
      <div className='contactPHeaderRoute'>
        <Link to={"/"}>Home</Link> <span> {">"} </span> <b>Contact</b>
      </div>
    </div>
  )
}

export default ContactPHeader
