import React from "react";
import './index.css';
import logo from '../../assets/img/dumble.png';

const Footer = () => {

    const year = new Date().getFullYear()
    
    return (
    <footer className="footer" data-aos='fade-up'
    data-aos-duration='2000'>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-box">
                <div className="logo">
                <div className="logo_img">
                    <img src={logo} alt="" />    
                </div>
                    <h2>FitBody</h2>
                </div>
                    <p>
                    Fitness is defined as the quality or state of being fit 
                    and healthy. Around 1950, perhaps
                     consistent with the Industrial.                        
                    </p>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">Company</h4>

                    <ul className="footer_links">
                        <li><a href="#">Our programe</a></li>
                        <li><a href="#">Our plan</a></li>
                        <li><a href="#">Become a member</a></li>
                        
                    </ul>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">Quick Links</h4>
                    <ul className="footer_links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                        
                    </ul>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">Quick Links</h4>
                    <ul className="footer_links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                        
                    </ul>
                </div>
            </div>
            <p className="Copyright">Copyright - {year} developed by Vaibhav.
             All rights reserved</p>
        </div>
    </footer>
    )
}

export default Footer;