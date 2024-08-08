import React, { useState, useEffect } from 'react';
import './aboutFormation.css';
import formationImg from '../../Assets/school/formationimg-removebg-preview.png';

const AboutFormation = () => {
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    const startAnimation = () => {
        if (!animationTriggered) {
            setAnimationTriggered(true);

            let progress1 = 0;
            let progress2 = 0;
            const interval1 = setInterval(() => {
                if (progress1 < 65) {
                    progress1 += 1;
                    setPercentage1(progress1);
                } else {
                    clearInterval(interval1);
                }
            }, 30); // Adjust the speed of the animation

            const interval2 = setInterval(() => {
                if (progress2 < 25) {
                    progress2 += 1;
                    setPercentage2(progress2);
                } else {
                    clearInterval(interval2);
                }
            }, 20);
        }
    };

    return (
        <div className='aboutFormationComponent'>
            <div 
                className='aboutFormation'
                onMouseEnter={startAnimation}
            >
                <div className='aboutFormationCours'>
                    <h5>Each course of the program comprises</h5>
                    <p>Our training programs provide a solid foundation in development, combining theory and practice to equip you with skills that can be directly applied in your career. At the end of each course, you have the opportunity to obtain a state-recognized certification, enhancing your professional profile. Certifications can be obtained through various methods.</p>
                    <a>Learn More</a>
                </div>
                <div className='aboutFormationCoursImage'>
                    <img src={formationImg} alt='icon' />
                </div>
                <div className='aboutFormationCoursPourcentage'>
                    <div className='pourcentage'>
                        <h3>{percentage1}%</h3>
                        <b>Question And Answer</b>
                        <p>either by checkbox, select options, or even written.</p>
                    </div>
                    <div className='pourcentage'>
                        <h3>{percentage2}%</h3>
                        <b>Projects</b>
                        <p>A final project that will cover all the concepts learned in the training.</p>
                    </div>
                    <a>Learn More</a>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutFormation;
