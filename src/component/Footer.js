import React from 'react';
import logo from './../assets/images/logo-transparent.png'
import fb from './../assets/images/social-media/facebook.png'
import insta from './../assets/images/social-media/instagram.png'
import twitter from './../assets/images/social-media/twitter.png'
import linkedin from './../assets/images/social-media/linkedin.png'

function Footer() {
    return (
        <>
            <div className='footer-section pt-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-4'>
                            <div>
                                <div className='logo-img'>
                                    <img
                                        src={logo}
                                        className="d-inline-block align-top logo-img w-100"
                                        alt="Mr Med Logo"
                                    />
                                </div>
                                <p className='company-desc'>
                                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a 
                                    document Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                                </p>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='row for-md-dev'>
                                <div className='col-md-2 adjustable-width'>
                                    <div>
                                        <h6 className='footer-link-heading'>Company</h6>

                                       <ul className='pl-0'>
                                           <li>
                                               <a href='#home' className='footer-link'>
                                                   About us
                                               </a>
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Careers
                                                </a>                                               
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Partners with mrmed
                                                </a>                                           
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Contact us
                                                </a>
                                           </li>
                                           
                                       </ul>
                                    </div>
                                </div>
                                <div className='col-md-4 adjustable-width'>
                                    <div>
                                        <h6 className='footer-link-heading'>Speciality Medicine</h6>

                                       <ul className='pl-0'>
                                           <li>
                                               <a href='#home' className='footer-link'>
                                                   Personal Care
                                               </a>
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Diabetics
                                                </a>                                               
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Fitness & Supplement
                                                </a>                                           
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Health Conditions
                                                </a>
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Health Care Devices
                                                </a>
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Corona virus prevention
                                                </a>
                                           </li>
                                           
                                       </ul>
                                    </div>  
                                </div>
                                <div className='col-md-3 adjustable-width'>
                                    <div>
                                        <h6 className='footer-link-heading'>Policy Info</h6>

                                       <ul className='pl-0'>
                                           <li>
                                               <a href='#home' className='footer-link'>
                                                   Editorial Policy
                                               </a>
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Privacy Policy
                                                </a>                                               
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Terms & Conditions
                                                </a>                                           
                                           </li>
                                           <li>
                                                <a href='#home' className='footer-link'>
                                                   Contact us
                                                </a>
                                           </li>
                                           
                                       </ul>
                                    </div>
                                </div>
                                <div className='col-md-3 adjustable-width'>
                                    <div>
                                        <h6 className='footer-link-heading'>Get in touch</h6>

                                       <ul className='pl-0 d-flex justify-content-between align-items-center'>
                                           <li>
                                               <div className='social-media'>
                                                    <img
                                                        src={fb}
                                                        className="d-inline-block align-top social-logo-img w-100"
                                                        alt="facebook"
                                                    />
                                               </div>
                                           </li>
                                           <li>
                                                <div className='social-media'>
                                                    <img
                                                        src={insta}
                                                        className="d-inline-block align-top social-logo-img w-100"
                                                        alt="insta"
                                                    />
                                                </div>                                             
                                           </li>
                                           <li>
                                                <div className='social-media'>
                                                    <img
                                                        src={ twitter }
                                                        className="d-inline-block align-top social-logo-img w-100"
                                                        alt="twitter"
                                                    />
                                                </div>                                          
                                           </li>
                                           <li>
                                                <div className='social-media'>
                                                    <img
                                                        src={ linkedin }
                                                        className="d-inline-block align-top social-logo-img w-100"
                                                        alt="linkedin"
                                                    />
                                                </div>
                                           </li>
                                           
                                       </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='footer-separator'/>

                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='rights'>Copyright © 2020 mrmed. All rights reserved.</p>
                        </div>
                        <div className='col-md-6'>
                            <p className='rights'>Privacy / Terms & Conditions / Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Footer;