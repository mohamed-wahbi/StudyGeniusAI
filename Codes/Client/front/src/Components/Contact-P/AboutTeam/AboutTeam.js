import React from 'react'
import './aboutTeam.css'
import hama from '../../../Assets/eleveAvis/parent2.png'
import badis from '../../../Assets/eleveAvis/stud3.jpg'
import aziz from '../../../Assets/eleveAvis/stud2.jpeg'

const AboutTeam = () => {
  return (
    <div className='aboutTeam'>
      <div className='ourTeam'>
        <h3>Our Team and Working Hours</h3>
        <div className='teamPerson'>

            <div className='customerCare'>
                <h4 style={{textTransform: "uppercase",color: "#1e3d6d",fontWeight: "bold"}}>Customer Care</h4>
                <p>If you have any questions, you can contact our professional team to get accurate answers for all your needs related to our platform.</p>
                <div className='teamInfos'>
                    <div className='cardCustomer'>
                        <img src={aziz} alt='customer' />
                        <div className='theCustomerInfo'>
                            <h4>Aziz Zribi</h4>
                            <p>Human Resources and Marketing Consultant</p>
                            <a href='mailto:azizzribi0107@gmail.com'>azizzribi0107@gmail.com</a>
                        </div>
                    </div>

                    <div className='cardCustomer'>
                        <img src={badis} alt='customer' />
                        <div className='theCustomerInfo'>
                            <h4>Mohamed Badis Abid</h4>
                            <p>Human Resources and Web Developer</p>
                            <a href='mailto:badisabid373@gmail.com'>badisabid373@gmail.com</a>
                        </div>
                    </div>

                    <div className='cardCustomer'>
                        <img src={hama} alt='customer' />
                        <div className='theCustomerInfo'>
                            <h4>Mohamed Wahbi Salwaj</h4>
                            <p>Human Resources and Web Developer</p>
                            <a href='mailto:wahbisj@gmail.com'>wahbisj@gmail.com</a>
                        </div>
                    </div>                
                </div>
            </div>

        </div>
        <div className='workHours'>
            <p className='p'>WORK HOURS</p>
            <div className='dayTimeWork'>
                <h5>Monday-Friday</h5>
                <p>9am-5pm</p>
                <h5>Saturdays</h5>
                <p>11am-5pm</p>
                <h5>Sundays</h5>
                <p>9am-3pm</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
