import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./registerPForm.css";

const RegisterPForm = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profile: "",
    nationality: "",
    state: "",
    street: "",
    postalCode: "",
    cin: "",
    university: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step === 1 && (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword)) {
      alert("Please complete all required fields and ensure passwords match.");
      return;
    }
    if (step === 2 && (!formData.nationality || !formData.state || !formData.street || !formData.postalCode || !formData.cin || !formData.university)) {
      alert("Please complete all required fields.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = () => {
    if (!captchaVerified) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }
    alert("Registration Completed!");
    console.log(formData)
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  

  return (
    <div className="app-container">
      <div className="form-container">
        <h2 className="h2">Registration - Step {step} of 3</h2>

        {step === 1 && (
          <div className="step" style={{"display": "flex","flexDirection": "column"}}>
            <h3 className="h3">General Information</h3>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            <select name="profile" value={formData.profile} onChange={handleChange} required>
              <option value="">Select Profile</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="educator">Educator</option>
            </select>
            <button onClick={handleNext} className="submit" >Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h3 className="h3">Location Information</h3>
            <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} required />
            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select State</option>
              <option value="Ariana">Ariana</option>
              <option value="Bizert">Bizert</option>
              <option value="Sousse">Sousse</option>
              <option value="Kebli">Kebli</option>
            </select>
            <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} required />
            <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required />
            <input type="text" name="cin" placeholder="CIN" value={formData.cin} onChange={handleChange} required />
            <select name="university" value={formData.university} onChange={handleChange} required>
              <option value="">Select University</option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Kebili">Kebili</option>
              <option value="Bizert">Bizert</option>
            </select>
            <div className="btnGroup">
              <button onClick={handlePrev} className="previous" >Previous</button>
              <button onClick={handleNext} className="submit">Next</button>
            </div>
            
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h3 className="h3">Verification</h3>
            <ReCAPTCHA sitekey="6LepWKwqAAAAAO1P_FmjLm3MB3PwxXNpCjciDhZN" onChange={handleCaptchaChange} />
            <div className="btnGroup">
              {captchaVerified?<button onClick={handleSubmit} disabled={!captchaVerified} className="submit">Submit</button> : null}
              <button onClick={handlePrev} className="previous" >Previous</button>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPForm;
