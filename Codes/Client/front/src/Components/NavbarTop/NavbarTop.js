import React from 'react'
import './navbarTop.css'
const NavbarTop = () => {
  return (
    <div className='navbarTop'>
      <div className='navbarTopContent'>
        <div className='navbarTopContentLeft'>
          <div className='contacts'> <i class="bi bi-question-circle" style={{marginRight:"5px"}}></i> Vous avez des questions ?</div>
          <div className='contacts'> <i class="bi bi-telephone" style={{marginRight:"5px"}}></i> +216-23267646</div>
          <div className='contacts'> <i class="bi bi-envelope" style={{marginRight:"5px"}}>  </i> StudyGeniousAI@gmail.com</div>
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
