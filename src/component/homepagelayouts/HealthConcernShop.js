import React, { Component } from 'react';
import Slider from "react-slick";
import EyeCare from '../../assets/images/health-concern/eye-care.png'
import KidneyCare from '../../assets/images/health-concern/kidney-care.png'
import Smoking from '../../assets/images/health-concern/smoking.png'
import StomachCare from '../../assets/images/health-concern/stomach-care.png'

class HealthConcernShop extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            accessibility : true,
            arrows : true,
            autoplay : true,
            autoplaySpeed : 3000,
            adaptiveHeight : true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };

        return (
            <>
                <div className='health-concern-section my-2 py-3'>
                    <div className='container mr-0'>
                        <div className='row'>
                            <h5 className='heading'>
                                Shop by health concern
                                <span className='heading-bottom-line'></span>
                            </h5>
                        </div>
                        <div className='health-concern-slider mt-5'>
                            <Slider {...settings}>
                                <div>
                                    <div className='healthy-pics'>
                                        <img
                                            src={ EyeCare }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    <div className='for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Eye Care
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>  

                                <div>
                                    <div className='healthy-pics'>
                                        <img
                                            src={ KidneyCare }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>              
                                    <div className='for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Kidney Care
                                        </p>
                                        <p className='shop-link'> 
                                            Shop now
                                        </p>
                                    </div>
                                </div>                        
                                <div>
                                    <div className='healthy-pics'>
                                        <img
                                            src={ Smoking }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>                                    
                                    <div className='for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Quit Smoking
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>                        
                                <div>
                                    <div className='healthy-pics'>
                                        <img
                                            src={ StomachCare }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    
                                    <div className='for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Stomach Care
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className='healthy-pics'>
                                        <img
                                            src={ Smoking }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                   
                                     <div className='for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Quit Smoking
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>                        
                                <div>
                                    <div className='healthy-pics'>
                                        <img
                                            src={ StomachCare }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    
                                     <div className='for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Stomach Care
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </div>   
                    </div>
                </div>
            </>         
        );
    }
}

export default HealthConcernShop;