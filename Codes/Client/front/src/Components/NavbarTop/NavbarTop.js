import React from 'react'
import './navbarTop.css'
const NavbarTop = () => {
  return (
    <div className='navbarTop'>
      <div className='navbarTopContent'>
        <div className='navbarTopContentLeft'>
          <div className='contacts'> <i class="bi bi-question-circle"></i>{" * "} Vous avez des questions ?</div>
          <div className='contacts'> <i class="bi bi-telephone"></i>{" * "} +216-23267646</div>
          <div className='contacts'> <i class="bi bi-envelope">  </i>{" * "} StudyGeniousAI@gmail.com</div>
        </div>
        <div className='navbarTopContentRight'>
          <button className='loginBtn'> <i class="bi bi-unlock"></i> Login</button>
          <button className='registerBtn'> <i class="bi bi-person-add"></i> Register</button>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
