import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='body'>
            <footer>
                <div className='waves'>
                    <div className='wave' id='wave1'></div>
                    <div className='wave' id='wave2'></div>
                    <div className='wave' id='wave3'></div>
                    <div className='wave' id='wave4'></div>

                </div>
                <ul className='social-icon'>
                    <li><a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>

                </ul>
                <ul className='menu'>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Stock Order Status</a></li>
                    <li><a href="">Payment Method</a></li>
                    <li><a href="">Terms & Condition</a></li>
                </ul>
                <p className='text-light my-1 text-lg'> ©{year} International Stock Market | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Footer;