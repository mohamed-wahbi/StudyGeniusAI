import React from 'react'
import './loginPHeader.css'
import { Link } from 'react-router-dom'

const LoginPHeader = () => {
  return (
    <div className='loginPHeader'>
      <div className='loginPHeaderImg'>
        <h3>Login</h3>
        <p>Continue with your platform</p>
      </div>
      <div className='loginPHeaderRoute'>
        <Link to={"/"}>Home</Link> <span> {">"} </span> <b>Login</b>
      </div>
    </div>
  )
}

export default LoginPHeader

