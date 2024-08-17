import React from 'react'
import './contactPSocial.css'

const ContactPSocial = () => {
  return (
    <div className='mainContactPSocial'>
        <h3>How you can find us </h3>
        <div className='contactPSocial'>
      <div className='socialContacts'>
        <i class="bi bi-geo-alt-fill"></i>
        <h6 className='titre'>Our Main Office</h6>
        <p>localisation 20 tunise ariana</p>
      </div>

      <div className='socialContacts'>
        <i class="bi bi-telephone-fill"></i>
        <h6 className='titre'>Phone Number</h6>
        <p>+216-23267646</p>
      </div>

      <div className='socialContacts'>
        <i class="bi bi-buildings-fill"></i>
        <h6 className='titre'>Fax</h6>
        <p>+216-23267646</p>
      </div>
      <div className='socialContacts'>
        <i class="bi bi-envelope-fill"></i>
        <h6 className='titre'>StudyGenious Email</h6>
        <p>StudyGenious@gmail.com</p>
      </div>
    </div>

    <div className='mapLocation'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12736.390950735991!2d10.116333!3d37.055154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2c50d9c147a09%3A0xdb90bc314fd6a190!2sKalaat%20El%20Andalous!5e0!3m2!1sfr!2stn!4v1723906686586!5m2!1sfr!2stn"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mapLocation'></iframe>

    </div>
    </div>
  )
}

export default ContactPSocial
