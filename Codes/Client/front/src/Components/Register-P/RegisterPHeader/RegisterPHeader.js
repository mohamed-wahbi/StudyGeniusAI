import React from 'react'
import './registerPHeader.css'
import { Link } from 'react-router-dom'

const RegisterPHeader = () => {
  return (
    <div className='registerPHeader'>
      <div className='registerPHeaderImg'>
        <h3>Register</h3>
        <p>Register quickly and specify your profile !</p>
      </div>
      <div className='registerPHeaderRoute'>
        <Link to={"/"}>Home</Link> <span> {">"} </span> <b>Register</b>
      </div>
    </div>
  )
}

export default RegisterPHeader
