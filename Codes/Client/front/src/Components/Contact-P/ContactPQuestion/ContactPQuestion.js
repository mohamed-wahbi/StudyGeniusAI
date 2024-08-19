import React from 'react'
import './contactPQuestion.css'
import Accordion from 'react-bootstrap/Accordion';

const ContactPQuestion = () => {
    return (
        <div className='contactPQuestion'>
            <h3>Do you have questions? Contact our team now!</h3>
            <div className='questions'>
                <div className='frequQuestions'>
                    <h4>Frequently Asked Questions</h4>
                    <p>Here are the most frequently asked questions from our students and their parents. You can get your answer quickly!</p>
                    <Accordion defaultActiveKey="0">

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Question 1: What is personalized guidance on the platform?</Accordion.Header>
                            <Accordion.Body>
                                Answer: Personalized guidance is a service that allows each student to receive support tailored to their specific educational needs. This can include course recommendations, additional exercises, and individualized mentoring sessions.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Question 2: How does the platform help students succeed in their education?</Accordion.Header>
                            <Accordion.Body>
                                Answer: The platform provides interactive learning tools, regular progress reports, and personalized educational resources to help students better understand subjects and improve their academic performance.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Question 3: How can parents track their child's educational progress online?</Accordion.Header>
                            <Accordion.Body>
                                Answer: Parents can log in to our platform using their child's information. This gives them access to a dashboard where they can track their child's progress, view grades, receive progress alerts, and benefit from additional features to better support their child's educational journey.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Question 4: What features does the platform offer to support struggling students?</Accordion.Header>
                            <Accordion.Body>
                                Answer: The platform offers online tutoring sessions, recommendations for additional resources, and notifications to parents and teachers to intervene quickly if performance declines.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Question 5: Is it possible for parents to communicate directly with teachers through the platform?</Accordion.Header>
                            <Accordion.Body>
                                Answer: Yes, the platform allows parents to communicate directly with teachers through an integrated messaging system. This fosters closer collaboration to support the student throughout their educational journey.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
                <div className='questForm'>
                    <h4>Ask Your Questions</h4>
                    <div className='formQuestion'>
                        <div className='questionCheckBox'>
                            <div className='chekboxComponent'>
                                <label>Parent</label>
                                <input type='radio' className='checkBoxInput' />
                            </div>

                            <div className='chekboxComponent'>
                                <label>Student</label>
                                <input type='radio' className='checkBoxInput' />
                            </div>

                            <div className='chekboxComponent'>
                                <label>Other</label>
                                <input type='radio' className='checkBoxInput' />
                            </div>
                        </div>

                        <div className='questionInputs'>
                            <input placeholder='Name' type='text' className='input' />
                            <input placeholder='Email' type='email' className='input' />
                            <textarea placeholder='Message'  className='input' />
                        </div>
                        <div className='sendQuestionBtn'>
                            <button>Submit</button>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactPQuestion
