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
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility : true,
        arrows : false,
        autoplay : true,
        autoplaySpeed : 3000,
        adaptiveHeight : true
    };
    return (
        <>
            <div className='customer-review-section my-2 py-3'>
                <div className='container'>
                    <div className='row'>
                        <h5 className='heading'>
                            What Customers Saying About Us
                            <span className='heading-bottom-line'></span>
                        </h5>
                    </div>    
                    <div className='customer-review-slider py-4'>
                        {/* <div className='row'> */}
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
                                        <p>Jay Shahjahan</p>

                                        <p>shahjahan@gmail.com</p>
                                        <div>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>

                                        <p>
                                            Veniam reprehenderit enim tempor nisi. 
                                            Consectetur sunt ullamco velit ex reprehenderit nostrud est officia aute est.
                                        </p>
                                    </div>
                                </div>                        
                                <div>
                                    helo
                                </div>                        
                                <div>
                                    hi
                                </div> 
                            </Slider>
                        {/* </div> */}
                    </div>
                </div>  
            </div>   
        </>
    );
}

export default CustomerReview;