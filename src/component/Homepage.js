import React, { Component } from 'react';
import stomach from './../assets/images/specialities/stomach.png'
import surgical_stomach from './../assets/images/specialities/surgical_stomach.png'
import urology from './../assets/images/specialities/urology.png'
import skin  from './../assets/images/specialities/skin.png'
import orthopaedics from './../assets/images/specialities/orthopaedics.png'
import nephrology from './../assets/images/specialities/nephrology.png'
import liver from './../assets/images/specialities/liver.png'
import ent from './../assets/images/specialities/ent.png'
import bronchus from './../assets/images/specialities/bronchus.png'
import OrderingSection from './homepagelayouts/OrderingSection';
import accessibilty from './../assets/images/usage/accessibility.png'
import affordability from './../assets/images/usage/affordability.png'
import reliability from './../assets/images/usage/reliability.png'
import HealthConcernShop from './homepagelayouts/HealthConcernShop';

class Homepage extends Component {
    render() {
        return (
            <>
                <div className='header-bottom-sec py-4'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className='special-medicine-box'>
                                <div className='row justify-content-between align-items-center p-2 heading'>
                                    <h5 className='main-head'>Speciality Medicines</h5>

                                    <div>
                                        <p className='mb-0 see-more'>See all</p>
                                    </div>
                                </div>
                                <div className='row px-2 py-3'>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ stomach }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>Medical Gastroenterology</p>
                                   </div>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ surgical_stomach }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>Surgical Gastroenterology</p>
                                   </div>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ liver }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>Liver transplant</p>
                                   </div>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ bronchus }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>Cardiothoracic</p>
                                   </div>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ urology }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>Urology</p>
                                   </div>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ ent }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>ENT</p>
                                   </div>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ skin }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>Dermatology</p>
                                   </div>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ nephrology }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>Nephrology</p>
                                   </div>
                                   <div className='specialities-option'>
                                        <div className='specialities-pic'>
                                            <img
                                                src={ orthopaedics }
                                                className="d-inline-block align-top"
                                                alt="Map pin"
                                            />
                                        </div>
                                        <p>Orthopaedics</p>
                                   </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <OrderingSection/>

                            <div className='row mt-4'>
                                <div className='col-md-4'>
                                    <div className='usage-comfort-box p-3'>
                                        <div className='usagability-pic mx-2'>
                                            <img
                                                src={ accessibilty }
                                                className="d-inline-block align-top w-100"
                                                alt="accessibility"
                                            />
                                        </div> 
                                        <div>
                                            <p className='mb-0'>Accessibility</p>    
                                        </div> 
                                        <div className='light-bg'></div>                                   
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='usage-comfort-box p-3'>
                                        <div className='usagability-pic mx-2'>
                                            <img
                                                src={ affordability }
                                                className="d-inline-block align-top w-100"
                                                alt="affordability"
                                            />
                                        </div> 
                                        <div>
                                            <p className='mb-0'>Affordability</p>    
                                        </div> 
                                        <div className='light-bg'></div>                                      
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='usage-comfort-box p-3'>
                                        <div className='usagability-pic mx-2'>
                                            <img
                                                src={ reliability }
                                                className="d-inline-block align-top w-100"
                                                alt="reliability"
                                            />
                                        </div> 
                                        <div>
                                            <p className='mb-0'>Reliability</p>    
                                        </div> 
                                        <div className='light-bg'></div>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>  
            </>
        );
    }
}

export default Homepage;

