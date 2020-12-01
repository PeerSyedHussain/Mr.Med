import React from 'react';
import { Button } from 'react-bootstrap';
import Register from '../../assets/images/imported/register.png'
import Search from '../../assets/images/imported/search.png'
import Contact from '../../assets/images/imported/contact.png'
import Deliver from '../../assets/images/imported/deliver.png'

function Imported() {
    return (
        <>
           <div className='imported-sec my-2 py-3'>
                <div className='container for-xl-device'>
                    <div className='row'>
                        <h5 className='heading'>
                            Imported Medicines
                            <span className='heading-bottom-line'></span>
                        </h5>
                    </div> 
                    <div className='row mt-3'>
                        <div className='col-md-9 pl-0'>
                                <p className='import-desc'>
                                    Genuine imported medicines imported directly in patient name. 
                                </p>
                        </div>
                    </div>
                    <div>
                        <Button className='import px-5'>
                            Import
                        </Button>
                    </div>
                    <div className='row align-items-start mt-4 justify-content-between'>
                        <div className='import-box'>
                            <div className='import-pic'>
                                <img
                                    src={ Register }
                                    className="d-inline-block align-top w-100"
                                    alt="register"
                                />
                            </div> 
                            <p className='import-reason text-center mt-3'> 
                                Register with Mr. Med
                            </p>
                        </div>
                        <div className='import-box'>
                            <div className='import-pic'>
                                <img
                                    src={ Search }
                                    className="d-inline-block align-top w-100"
                                    alt="search"
                                />
                            </div> 
                            <p className='import-reason text-center mt-3'>
                                Request for imported medicine
                            </p>
                        </div>
                        <div className='import-box'>
                            <div className='import-pic'>
                                <img
                                    src={ Contact }
                                    className="d-inline-block align-top w-100"
                                    alt="contact"
                                />
                            </div>  
                            <p className='import-reason text-center mt-3'>
                                We will reach out to you with price and delivery dates
                            </p>
                        </div>
                        <div className='import-box'>
                            <div className='import-pic'>
                                <img
                                    src={ Deliver }
                                    className="d-inline-block align-top w-100"
                                    alt="deliver"
                                />
                            </div>  
                            <p className='import-reason text-center mt-3'>
                                Genuine medicine door delivered with all necessary legal documents
                            </p>
                        </div>
                        {/* <div className='col-md-3 import-round'>
                            <div className='import-bg bg-1'>
                                <div className='import-pic'>
                                    <img
                                        src={ Register }
                                        className="d-inline-block align-top w-100"
                                        alt="register"
                                    />
                                </div>                                
                            </div>
                            <p className='import-reason text-center mt-3'> 
                                Register with Mr. Med
                            </p>
                        </div>
                        <div className='col-md-3 import-round'>
                            <div className='import-bg bg-2'>
                                <div className='import-pic'>
                                    <img
                                        src={ Search }
                                        className="d-inline-block align-top w-100"
                                        alt="search"
                                    />
                                </div>    
                            </div>
                            <p className='import-reason text-center mt-3'>
                                Request for imported medicine
                            </p>
                        </div>
                        <div className='col-md-3 import-round'>
                            <div className='import-bg bg-3'>
                                <div className='import-pic'>
                                    <img
                                        src={ Contact }
                                        className="d-inline-block align-top w-100"
                                        alt="contact"
                                    />
                                </div>                                
                            </div>
                            <p className='import-reason text-center mt-3'>
                                We will reach out to you with price and delivery dates
                            </p>
                        </div>
                        <div className='col-md-3 import-round'>
                            <div className='import-bg bg-4'>
                                <div className='import-pic'>
                                    <img
                                        src={ Deliver }
                                        className="d-inline-block align-top w-100"
                                        alt="deliver"
                                    />
                                </div>     
                            </div>
                            <p className='import-reason text-center mt-3'>
                                Genuine medicine door delivered with all necessary legal documents
                            </p>
                        </div> */}
                    </div>
                </div>   
            </div> 
        </>
    );
}

export default Imported;