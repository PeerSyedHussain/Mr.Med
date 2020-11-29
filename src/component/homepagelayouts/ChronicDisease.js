import React, { Component } from 'react';
import Slider from 'react-slick';
import Diabetics from '../../assets/images/chronic-diseases/diabetics.png'
import Cancer from '../../assets/images/chronic-diseases/cancer.png'
import Hiv_Pic from '../../assets/images/chronic-diseases/hiv.png'
import Arthritis from '../../assets/images/chronic-diseases/Arthritis.png'


class ChronicDisease extends Component {
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
                <div className='chronic-disease-section my-2 py-3'>
                    <div className='container mr-0'>
                        <div className='row'>
                            <h5 className='heading'>
                                Medicines for Chronic Diseases
                                <span className='heading-bottom-line'></span>
                            </h5>
                        </div>
                        <div className='chronic-disease-slider mt-5'>
                            <Slider {...settings}>
                                <div className='chronic-box'>
                                    <div className='chronic-pics'>
                                        <img
                                            src={ Diabetics }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    <div className='mx-2 for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Diabetics
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>  

                                <div className='chronic-box'>
                                    <div className='chronic-pics'>
                                        <img
                                            src={ Cancer }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>              
                                    <div className='mx-2 for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Cancer
                                        </p>
                                        <p className='shop-link'> 
                                            Shop now
                                        </p>
                                    </div>
                                </div>                        
                                {/* <div className='chronic-box'>
                                    <div className='chronic-pics'>
                                        <img
                                            src={ Hiv_Pic }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>                                    
                                     <div className='mx-2 for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Hiv
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>                         */}
                                <div className='chronic-box'>
                                    <div className='chronic-pics'>
                                        <img
                                            src={ Arthritis }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    
                                     <div className='mx-2 for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Osteoporosis
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                                <div className='chronic-box'>
                                    <div className='chronic-pics'>
                                        <img
                                            src={ Cancer }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                   
                                     <div className='mx-2 for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Cancer
                                        </p>
                                        <p className='shop-link'>
                                            Shop now
                                        </p>
                                    </div>
                                </div>                        
                                <div className='chronic-box'>
                                    <div className='chronic-pics'>
                                        <img
                                            src={ Arthritis }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    
                                     <div className='mx-2 for-mobile-dev'>
                                        <p className='affected-area mb-0'>
                                            Osteoporosis
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

export default ChronicDisease;