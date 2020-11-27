import React, { Component } from 'react';
import Slider from "react-slick";
import Slider1 from '../../assets/images/slider/Group 2863.png'
import Slider2 from '../../assets/images/slider/Group 2864.png'
import Slider3 from '../../assets/images/slider/Group 2865.png'

class OrderingSection extends Component {
    render() {
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
                 <div className='order-slider'>
                    <Slider {...settings}>
                        <div>
                            <img
                                src={ Slider1 }
                                className="d-inline-block align-top w-100"
                                alt="slider"
                            />
                        </div>                        
                        <div>
                            <img
                                src={ Slider2 }
                                className="d-inline-block align-top w-100"
                                alt="slider"
                            />
                        </div>                        
                        <div>
                            <img
                                src={ Slider3 }
                                className="d-inline-block align-top w-100"
                                alt="slider"
                            />
                        </div>                        
                    </Slider>
                </div>   
            </>
        );
    }
}

export default OrderingSection;