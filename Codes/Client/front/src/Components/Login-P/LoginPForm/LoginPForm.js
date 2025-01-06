import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import "./loginPForm.css";

const LoginPForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleReCAPTCHAChange = (value) => {
        if (value) {
            setIsVerified(true);
            setErrorMessage(''); 
        }
    };

    const handleLogin = () => {
        if (!email || !password ) {
            setErrorMessage('All fields are required.');
            return;
        }

        if (!isVerified) {
            setErrorMessage('Please complete the reCAPTCHA verification.');
            return;
        }

        setErrorMessage(''); 
        console.log('Login Successful!');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='LoginPForm'>
            <div className='form-container'>
                <h2 className='h2'>Authentication</h2>
                <form>
                    <h3 className='h3'>Enter your personal data</h3>
                    <div className='form-group'>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Email'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='Password'
                        />
                    </div>
                    
                    <div className='form-group'>
                        <ReCAPTCHA
                            sitekey='6LepWKwqAAAAAO1P_FmjLm3MB3PwxXNpCjciDhZN'
                            onChange={handleReCAPTCHAChange}
                        />
                    </div>
                    {errorMessage && (
                        <p className='error-message'>{errorMessage}</p>
                    )}
                    {isVerified && (
                        <button
                            type='button'
                            className='login-button'
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoginPForm;
