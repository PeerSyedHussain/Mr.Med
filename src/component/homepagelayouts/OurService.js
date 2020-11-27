import React from 'react';
import Visitor from '../../assets/images/service/visitor.png'
import Dealers from '../../assets/images/service/dealers.png'
import Delivers from '../../assets/images/service/delivers.png'

function OurService() {
    return (
        <>
            <div className='our-services py-5'>
                <div className='container'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-md-4'>
                            <div className='service'>
                                <div className='service-pic'>
                                    <img
                                        src={ Visitor }
                                        className="d-inline-block align-top w-100"
                                        alt="visitor"
                                    />
                                </div>
                                <div className='text-center mt-4'>
                                    <p className='count'>500+</p>
                                    <p className='count-desc'>Visitors</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='service'>
                                <div className='service-pic'>
                                    <img
                                        src={ Dealers }
                                        className="d-inline-block align-top w-100"
                                        alt="dealers"
                                    />
                                </div>
                                <div className='text-center mt-4'>
                                    <p className='count'>26587+</p>
                                    <p className='count-desc'>Medicine Dealers</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='service'>
                                <div className='service-pic'>
                                    <img
                                        src={ Delivers }
                                        className="d-inline-block align-top w-100"
                                        alt="delivers"
                                    />
                                </div>
                                <div className='text-center mt-4'>
                                    <p className='count'>2600+</p>
                                    <p className='count-desc'>Orders Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default OurService;