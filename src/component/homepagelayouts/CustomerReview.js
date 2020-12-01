import React from 'react';
import Slider from 'react-slick'
import Review1 from '../../assets/images/customer-review/review1.png'
import Review2 from '../../assets/images/customer-review/review2.png'
import Review3 from '../../assets/images/customer-review/review3.png'

function CustomerReview() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        accessibility : true,
        arrows : false,
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
            <div className='customer-review-section my-2 py-3'>
                <div className='container for-xl-device'>
                    <div className='row'>
                        <h5 className='heading'>
                            What Customers Saying About Us
                            <span className='heading-bottom-line'></span>
                        </h5>
                    </div>    
                    <div className='customer-review-slider py-5'>
                        <Slider {...settings}>
                            <div className='customer-box'>
                                <div className='customer-pic'>
                                    <img
                                        src={ Review1 }
                                        className="d-inline-block align-top w-100"
                                        alt="slider"
                                    />
                                </div>
                                <div className='px-4'>
                                    <p className='customer-name my-1'>Jay Shahjahan</p>

                                    <p className='customer-mail-id '>shahjahan@gmail.com</p>
                                    <div className='my-1'>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <p className='customer-review'>
                                        Veniam reprehenderit enim tempor nisi. 
                                        Consectetur sunt ullamco velit ex reprehenderit nostrud est officia aute est.
                                    </p>
                                </div>
                            </div>  
                            <div className='customer-box'>
                                <div className='customer-pic'>
                                    <img
                                        src={ Review2 }
                                        className="d-inline-block align-top w-100"
                                        alt="slider"
                                    />
                                </div>
                                <div className='px-4'>
                                    <p className='customer-name my-1'>Jay Shahjahan</p>

                                    <p className='customer-mail-id'>shahjahan@gmail.com</p>
                                    <div className='my-1'>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <p className='customer-review'>
                                        Veniam reprehenderit enim tempor nisi. 
                                        Consectetur sunt ullamco velit ex reprehenderit nostrud est officia aute est.
                                    </p>
                                </div>
                            </div>                        
                            <div className='customer-box'>
                                <div className='customer-pic'>
                                    <img
                                        src={ Review3 }
                                        className="d-inline-block align-top w-100"
                                        alt="slider"
                                    />
                                </div>
                                <div className='px-4'>
                                    <p className='customer-name my-1'>Jay Shahjahan</p>

                                    <p className='customer-mail-id'>shahjahan@gmail.com</p>
                                    <div className='my-1'>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <p className='customer-review'>
                                        Veniam reprehenderit enim tempor nisi. 
                                        Consectetur sunt ullamco velit ex reprehenderit nostrud est officia aute est.
                                    </p>
                                </div>
                            </div>  
                            <div className='customer-box'>
                                <div className='customer-pic'>
                                    <img
                                        src={ Review1 }
                                        className="d-inline-block align-top w-100"
                                        alt="slider"
                                    />
                                </div>
                                <div className='px-4'>
                                    <p className='customer-name my-1'>Jay Shahjahan</p>

                                    <p className='customer-mail-id'>shahjahan@gmail.com</p>
                                    <div className='my-1'>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <p className='customer-review'>
                                        Veniam reprehenderit enim tempor nisi. 
                                        Consectetur sunt ullamco velit ex reprehenderit nostrud est officia aute est.
                                    </p>
                                </div>
                            </div>  
                            <div className='customer-box'>
                                <div className='customer-pic'>
                                    <img
                                        src={ Review2 }
                                        className="d-inline-block align-top w-100"
                                        alt="slider"
                                    />
                                </div>
                                <div className='px-4'>
                                    <p className='customer-name my-1'>Jay Shahjahan</p>

                                    <p className='customer-mail-id'>shahjahan@gmail.com</p>
                                    <div className='my-1'>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>

                                    <p className='customer-review'>
                                        Veniam reprehenderit enim tempor nisi. 
                                        Consectetur sunt ullamco velit ex reprehenderit nostrud est officia aute est.
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

export default CustomerReview;