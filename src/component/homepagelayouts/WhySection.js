import React from 'react';
import Centric from '../../assets/images/why-med/centric.png'
import Medicine from '../../assets/images/why-med/medicine.png'
import Delivery from '../../assets/images/why-med//delivery.png'
import Pharma from '../../assets/images/why-med/pharma.png'
import Experts from '../../assets/images/why-med/experts.png'

function WhySection() {
    return (
        <>
            <div className='why-med-sec my-2 py-4'>
                <div className='container'>
                    <div className='row'>
                        <h5 className='heading'>
                            Why MrMed?
                            <span className='heading-bottom-line'></span>
                        </h5>
                    </div>

                    <div className='row pt-4 for-xl-dev'>
                        <div className='reason-box'>
                            <div className='reason-pic'>
                                <img
                                    src={ Centric }
                                    className="d-inline-block align-top w-100"
                                    alt="Centric"
                                />
                            </div>
                            <div className='ml-4 for-mobile-dev'>
                                <h6 className='heading'>Patient Centric</h6>
                                
                                <p className='reasonable'>We have the largest inventory of medicine and are focused on offering the best price to patients. 
                                    We will procure any medicine not in our database within hours.</p>
                            </div>
                        </div>

                        <div className='reason-box'>
                            <div className='reason-pic'>
                                <img
                                    src={ Medicine }
                                    className="d-inline-block align-top w-100"
                                    alt="Centric"
                                />
                            </div>
                            <div className='ml-4 for-mobile-dev'>
                                <h6 className='heading'>Highest Quality, Genuine Medicine</h6>
                                
                                <p className='reasonable'>We assure you of ethical practices, genuine invoices that match dispatched medicine batch number.</p>
                            </div>
                        </div>
                        <div className='reason-box'>
                            <div className='reason-pic'>
                                <img
                                    src={ Delivery }
                                    className="d-inline-block align-top w-100"
                                    alt="Centric"
                                />
                            </div>
                            <div className='ml-4 for-mobile-dev'>
                                <h6 className='heading'>Delivery across India with upmost care</h6>
                                
                                <p className='reasonable'>Cold chain logistics, on-time delivery.</p>
                            </div>
                        </div>
                        <div className='reason-box'>
                            <div className='reason-pic'>
                                <img
                                    src={ Pharma }
                                    className="d-inline-block align-top w-100"
                                    alt="Centric"
                                />
                            </div>
                            <div className='ml-4 for-mobile-dev'>
                                <h6 className='heading'>Inhouse Pharmacists</h6>
                                
                                <p className='reasonable'>Our in-house pharmacists will assist you with your prescription, patient assistance programs offered by pharma companies and much more.</p>
                            </div>
                        </div>
                        <div className='reason-box'>
                            <div className='reason-pic'>
                                <img
                                    src={ Experts }
                                    className="d-inline-block align-top w-100"
                                    alt="Centric"
                                />
                            </div>
                            <div className='ml-4 for-mobile-dev'>
                                <h6 className='heading'>Super Speciality Pharma Experts </h6>
                                
                                <p className='reasonable'>The team at Mr. Med comprises of pharmacists, distributors and clinicians with over 40 years of experience.</p>
                            </div>
                        </div>

                        {/* <div className='col-md-4'>
                            <div className='reasons'>
                                <div className='reason-pic'>
                                    <img
                                        src={ Centric }
                                        className="d-inline-block align-top w-100"
                                        alt="Centric"
                                    />
                                </div>
                                <div className='ml-4 for-mobile-dev'>
                                    <h6 className='heading'>Patient Centric</h6>
                                    
                                    <p className='reasonable'>We have the largest inventory of medicine and are focused on offering the best price to patients. 
                                        We will procure any medicine not in our database within hours.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='reasons'>
                                <div className='reason-pic'>
                                    <img
                                        src={ Medicine }
                                        className="d-inline-block align-top w-100"
                                        alt="Centric"
                                    />
                                </div>
                                <div className='ml-4 for-mobile-dev'>
                                    <h6 className='heading'>Highest Quality, Genuine Medicine</h6>
                                    
                                    <p className='reasonable'>We assure you of ethical practices, genuine invoices that match dispatched medicine batch number.</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className='col-md-4'>
                            <div className='reasons'>
                                <div className='reason-pic'>
                                    <img
                                        src={ Delivery }
                                        className="d-inline-block align-top w-100"
                                        alt="Centric"
                                    />
                                </div>
                                <div className='ml-4 for-mobile-dev'>
                                    <h6 className='heading'>Delivery across India with upmost care</h6>
                                    
                                    <p className='reasonable'>Cold chain logistics, on-time delivery.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='reasons'>
                                <div className='reason-pic'>
                                    <img
                                        src={ Pharma }
                                        className="d-inline-block align-top w-100"
                                        alt="Centric"
                                    />
                                </div>
                                <div className='ml-4 for-mobile-dev'>
                                    <h6 className='heading'>Inhouse Pharmacists</h6>
                                    
                                    <p className='reasonable'>Our in-house pharmacists will assist you with your prescription, patient assistance programs offered by pharma companies and much more.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='reasons'>
                                <div className='reason-pic'>
                                    <img
                                        src={ Experts }
                                        className="d-inline-block align-top w-100"
                                        alt="Centric"
                                    />
                                </div>
                                <div className='ml-4 for-mobile-dev'>
                                    <h6 className='heading'>Super Speciality Pharma Experts </h6>
                                    
                                    <p className='reasonable'>The team at Mr. Med comprises of pharmacists, distributors and clinicians with over 40 years of experience.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default WhySection;