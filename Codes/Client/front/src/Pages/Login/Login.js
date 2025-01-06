import React from 'react'
import NavbarTop from '../../Components/NavbarTop/NavbarTop'
import NavbarBottom from '../../Components/NavbarBottom/NavbarBottom'
import LoginPHeader from '../../Components/Login-P/LoginPHeader/LoginPHeader'
import LoginPForm from '../../Components/Login-P/LoginPForm/LoginPForm'
import Footer from '../../Components/Footer/Footer'

const Login = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <LoginPHeader />
      <LoginPForm />
      <Footer />
    </div>
  )
}

export default Login
