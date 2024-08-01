import React from 'react'
import './aboutOurUniversity.css'
import isetKebili from '../../Assets/isetKEBILI/isetkebili.jpg'

const AboutOurUniversity = () => {
    return (
        <div className='aboutOurUniversity'>
            <h3 className='titre'>About Our University</h3>
            <div className='aboutTextContent'>
                <img src={isetKebili} alt='iset Img' className='isetKeImg' />
                <p className='textAboutUniversity'>
                    The <span className='isetSpan'>ISET Kébili</span>  plays a crucial role in the economic and social development
                    of the Kébili region by providing high-quality technical and technological education.
                    With its modern infrastructure, diverse programs, and collaborations with the industrial sector, the ISET Kébili
                    effectively prepares its students to enter the job market
                    and contribute to the technological development of Tunisia.
                </p>
                <a className='learnMoreAboutUniversity'>learn more</a>
            </div>
        </div>
    )
}

export default AboutOurUniversity
