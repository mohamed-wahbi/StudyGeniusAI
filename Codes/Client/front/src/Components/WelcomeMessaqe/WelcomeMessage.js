import React from 'react'
import './welcomeMessage.css'
import Button from 'react-bootstrap/Button';


const WelcomeMessage = () => {
    return (
        <div className='welcomeMessage'>
            <div className='barRight'></div>
            <div className='textMessage'>
                <h3>Welcome</h3>
                <p>We're delighted to welcome you to our learning community. Our platform is designed to support students in their educational journey by providing a range of resources and tools, including a comprehensive statistical system to track academic success. Parents can also stay involved and monitor their child's progress, ensuring a collaborative and supportive learning environment.

                    Feel free to explore our features, and if you have any questions or need assistance, our team is here to help. Together, let's achieve success and make learning an enriching experience for everyone.
                    Welcome aboard!</p>
                    <Button variant="success">Read More</Button>
            </div>
            <div className='barLeft'></div>
        </div>
    )
}

export default WelcomeMessage


