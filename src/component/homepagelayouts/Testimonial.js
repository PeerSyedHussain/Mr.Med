import React from 'react';
import Slider from "react-slick";
import Client_1 from '../../assets/images/testimonial/testimonial1.png'
import Client_2 from '../../assets/images/testimonial/testimonnial2.png'

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibility : true,
        arrows : false,
        autoplay : true,
        autoplaySpeed : 3000,
        adaptiveHeight : true
    };
    return (
        <>
            <div className='testimonial-section my-2 py-3'>
                <div className='container'>
                    <div className='row'>
                        <h5 className='heading'>
                            Testimonials
                            <span className='heading-bottom-line'></span>
                        </h5>
                    </div>
                    {/* <div className='row'> */}
                        <div className='testimonial-slider py-4'>
                            <Slider {...settings}>
                                <div className='testimonial-box'>
                                    <div className='client-pic'>
                                        <img
                                            src={ Client_1 }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    <div className='px-3'>
                                        <p className='client-name'>Jay Shahjahan</p>
                                        <p className='client-mail-id'>shahjahan@gmail.com</p>
                                        <p className='client-review'>
                                            Best service and app amongst all available. I have it for more than 3 years and even 
                                            during pandemic, they have kept their standards high and a delivered the order within 
                                            24 hours.Keep it up, good work
                                        </p>
                                    </div>                                   
                                </div> 
                                <div className='testimonial-box'>
                                    <div className='client-pic'>
                                        <img
                                            src={ Client_2 }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    <div className='px-3'>
                                        <p className='client-name'>Jay Shahjahan</p>
                                        <p className='client-mail-id'>shahjahan@gmail.com</p>
                                        <p className='client-review'>
                                            Best service and app amongst all available. I have it for more than 3 years and even 
                                            during pandemic, they have kept their standards high and a delivered the order within 
                                            24 hours.Keep it up, good work
                                        </p>
                                    </div>        
                                </div>                        
                                <div className='testimonial-box'>
                                    <div className='client-pic'>
                                        <img
                                            src={ Client_2 }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    <div className='px-3'>
                                        <p className='client-name'>Jay Shahjahan</p>
                                        <p className='client-mail-id'>shahjahan@gmail.com</p>
                                        <p className='client-review'>
                                            Best service and app amongst all available. I have it for more than 3 years and even 
                                            during pandemic, they have kept their standards high and a delivered the order within 
                                            24 hours.Keep it up, good work
                                        </p>
                                    </div>                                    
                                </div> 
                                <div className='testimonial-box'>
                                    <div className='client-pic'>
                                        <img
                                            src={ Client_1 }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    <div className='px-3'>
                                        <p className='client-name'>Jay Shahjahan</p>
                                        <p className='client-mail-id'>shahjahan@gmail.com</p>
                                        <p className='client-review'>
                                            Best service and app amongst all available. I have it for more than 3 years and even 
                                            during pandemic, they have kept their standards high and a delivered the order within 
                                            24 hours.Keep it up, good work
                                        </p>
                                    </div>                                    
                                </div>     
                                <div className='testimonial-box'>
                                    <div className='client-pic'>
                                        <img
                                            src={ Client_1 }
                                            className="d-inline-block align-top w-100"
                                            alt="slider"
                                        />
                                    </div>
                                    <div className='px-3'>
                                        <p className='client-name'>Jay Shahjahan</p>
                                        <p className='client-mail-id'>shahjahan@gmail.com</p>
                                        <p className='client-review'>
                                            Best service and app amongst all available. I have it for more than 3 years and even 
                                            during pandemic, they have kept their standards high and a delivered the order within 
                                            24 hours.Keep it up, good work
                                        </p>
                                    </div>
                                </div>                      
                            </Slider>
                        </div>   
                    {/* </div> */}
                </div>    
            </div>   
        </>
    );
}

export default Testimonial;