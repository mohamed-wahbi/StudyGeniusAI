import React from 'react';
import './footer.css';
import logo from '../../Assets/logo.png'
const Footer = () => {
  return (
    <div className="footer">
        <div className="row">
            <div className="col">
                <img src={logo} className="footer_logo" alt="Logo" />
                <p className="footer_about">We're delighted to welcome you to our learning community. Our platform is designed to support students in their educational journey by providing a range of resources and tools, including a comprehensive statistical system to track academic success. Parents can also stay involved and monitor their child's progress, ensuring a collaborative and supportive learning environment. Feel free to explore our features, and if you have any questions or need assistance, our team is here to help. Together, let's achieve success and make learning an enriching experience for everyone.!
                </p>
            </div>
            <div className="col">
                <h3>Office <div className="bottom_line"><span></span></div></h3>
                <p><i class="bi bi-geo-alt-fill"></i> Tunise,kebili 1250</p>
                <p className="footer_email"><i class="bi bi-envelope-fill"></i> studyGeniousAI@gmail.com</p>
                <p><i class="bi bi-telephone-fill"></i> +216 - 23267646</p>
            </div>
            <div className="col">
                <h3>Links <div className="bottom_line"><span></span></div></h3>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICE</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Newsletter <div className="bottom_line"><span></span></div></h3>
                <form>
                    <ion-icon className="icon" name="mail"></ion-icon>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit"><i class="bi bi-arrow-right-circle-fill" style={{fontSize:"25px",color:'white'}}></i></button>
                </form>
                <div className="social_icons">
                    <i class="bi bi-facebook social_icon" ></i>
                    <i class="bi bi-whatsapp social_icon" ></i>
                    <i class="bi bi-twitter social_icon"></i>
                    <i class="bi bi-instagram social_icon"></i>
                    <ion-icon className="social_icon" name="logo-instagram"></ion-icon>
                </div>
            </div>
        </div>
        <hr />
        <p className="copyright">MWS-DEV 2024 - All Rights Reserved</p>
    </div> 
  );
}

export default Footer;
