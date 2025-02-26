import React from 'react'
import './register.css'
import NavbarTop from '../../Components/NavbarTop/NavbarTop'
import NavbarBottom from '../../Components/NavbarBottom/NavbarBottom'
import RegisterPHeader from '../../Components/Register-P/RegisterPHeader/RegisterPHeader'
import RegisterPForm from '../../Components/Register-P/RegisterPForm/RegisterPForm'
import Footer from '../../Components/Footer/Footer'
import RegisterPInfos from '../../Components/Register-P/RegisterPInfos/RegisterPInfos'

const Register = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <RegisterPHeader />
      <RegisterPForm />
      <RegisterPInfos />
      <Footer />
    </div>
  )
}

export default Register
