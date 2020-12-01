import React from 'react';
import { Button } from 'react-bootstrap';
import Delivery from '../../assets/images/assistance/delivery.png'
import Register from '../../assets/images/assistance/register.png'
import Search from '../../assets/images/assistance/search.png'
import Request from '../../assets/images/assistance/request.png'
import Contact from '../../assets/images/assistance/contact.png'

function AssistanceProgram() {
    return (
        <>
            <div className='assistance-program-sec my-2 py-4'>
                <div className='container for-xl-device'>
                    <div className='row'>
                        <h5 className='heading'>
                            Patient Assistance Program
                            <span className='heading-bottom-line'></span>
                        </h5>
                    </div> 
                    <div className='row mt-3'>
                        <div className='col-md-9 pl-0'>
                                <p className='program-desc'>
                                    Manufacturer of specialty medicines time to time offers various discounts on such medicines under
                                    the Patients Assistance Programs to patients suffering from chronic diseases, 
                                    but such discounts are not offered by local chemists due to their own financial 
                                    benefits or they are not aware of such discounts.
                                </p>
                        </div>
                    </div>
                    <div>
                        <Button className='register-program px-5'>
                            Register
                        </Button>
                    </div>

                    <div className='row justify-content-around mt-3'>
                        <div className='assistance-box'>
                            <div className='assistance-img'>
                                <img
                                    src={ Register }
                                    className="d-inline-block align-top w-100"
                                    alt="register"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'>
                                Register with Mr.Med
                            </p>
                        </div>
                        <div className='assistance-box'>
                            <div className='assistance-img'>
                                <img
                                    src={ Search }
                                    className="d-inline-block align-top w-100"
                                    alt="search"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'>
                                Search for your prescription medicine
                            </p>
                        </div>
                        <div className='assistance-box'>
                            <div className='assistance-img'>
                                <img
                                    src={ Request }
                                    className="d-inline-block align-top w-100"
                                    alt="request"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'> 
                                Request enrollment in PAP for your prescription medicine 
                            </p>
                        </div>
                        <div className='assistance-box'>
                            <div className='assistance-img'>
                                <img
                                    src={ Contact }
                                    className="d-inline-block align-top w-100"
                                    alt="contact"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'>
                                We will reach out to you with process details and documentation required for PAP registration
                            </p>
                        </div>
                        <div className='assistance-box'>
                            <div className='assistance-img'>
                                <img
                                    src={ Delivery }
                                    className="d-inline-block align-top w-100"
                                    alt="delivery"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'>
                                Door delivery of PAP medicine 
                            </p>
                        </div>
                        {/* <div className='col-md-4'>
                            <div className='assistance-box'>
                                <img
                                    src={ Register }
                                    className="d-inline-block align-top w-100"
                                    alt="register"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'>
                                Register with Mr.Med
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='assistance-box'>
                                <img
                                    src={ Search }
                                    className="d-inline-block align-top w-100"
                                    alt="search"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'>
                                Search for your prescription medicine
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='assistance-box'>
                                <img
                                    src={ Request }
                                    className="d-inline-block align-top w-100"
                                    alt="request"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'> 
                                Request enrollment in PAP for your prescription medicine 
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='assistance-box'>
                                <img
                                    src={ Contact }
                                    className="d-inline-block align-top w-100"
                                    alt="contact"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'>
                                We will reach out to you with process details and documentation required for PAP registration
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='assistance-box'>
                                <img
                                    src={ Delivery }
                                    className="d-inline-block align-top w-100"
                                    alt="delivery"
                                />
                            </div>
                            <p className='register-intro mt-2 mb-0 text-center'>
                                Door delivery of PAP medicine 
                            </p>
                        </div> */}
                    </div>
                </div>    
            </div>   
        </>
    );
}

export default AssistanceProgram;