import React from 'react'
import "./whyAcademicsWorks.css";

import graduation from "../../Assets/school/graduation-hat.png"
import reading from "../../Assets/school/reading-book.png"
import school from "../../Assets/school/school.png"

const WhyAcademicsWorks = () => {
  return (
    <div className='whyAcademicsWorks'>
     <h3 className='titre'>Why Academics Works</h3>
      <div className='cardWhyAcademiWorks'>
        <div className='card'>
          <div className='exagoneForm'><img src={graduation} alt='icon'  className='imgSchool'/></div>
          <div className='cardContentText'>
            <h2 className='title'>Personalize Learning</h2>
            <p className='paragraphe'>Tailored learning experiences that cater to individual student needs.</p>
            <a className='btnLearnMore'>Learn More</a>
          </div>
        </div>
        <div className='card'>
         <div className='exagoneForm'><img src={reading} alt='icon'  className='imgSchool' /></div>
         <div className='cardContentText'>
            <h2 className='title'>Parental Monitoring</h2>
            <p className='paragraphe'>Tools and systems to help parents track their children's academic progress.</p>
            <a className='btnLearnMore'>Learn More</a>
          </div>
        </div>
        <div className='card'>
         <div className='exagoneForm'><img src={school} alt='icon'  className='imgSchool'/></div>
         <div className='cardContentText'>
            <h2 className='title'>University Statistics</h2>
            <p className='paragraphe'>Comprehensive data and insights about university performance and trends.</p>
            <a className='btnLearnMore'>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyAcademicsWorks
