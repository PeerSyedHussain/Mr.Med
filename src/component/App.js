import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';
import About from './homepagelayouts/About';
import AssistanceProgram from './homepagelayouts/AssistanceProgram';
import ChronicDisease from './homepagelayouts/ChronicDisease';
import CustomerReview from './homepagelayouts/CustomerReview';
import HealthConcernShop from './homepagelayouts/HealthConcernShop';
import Imported from './homepagelayouts/Imported';
import OurService from './homepagelayouts/OurService';
import Testimonial from './homepagelayouts/Testimonial';
import WhySection from './homepagelayouts/WhySection';
import chatBtn from './../assets/images/chat.png'
class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <section className='container for-xl-device'>
                    <Homepage/>
                </section>
                <section>
                    <HealthConcernShop/>
                </section>
                <section>
                    <ChronicDisease/>
                </section>
                <section>
                    <WhySection/>
                </section>
                <section>
                    <AssistanceProgram/>
                </section>
                <section>
                    <Imported/>
                </section>
                <section>
                    <Testimonial/>
                </section>
                <section>
                    <CustomerReview/>
                </section>
                <section>
                    <OurService/>
                </section>
                <section>
                    <About/>
                </section>
                <section>
                    <Footer/>
                </section>
                <div className='chat-btn'>
                    <img
                        src={chatBtn}
                        className="d-inline-block align-top chat-img"
                        alt="Chat logo"
                    />
                </div>
            </>
        );
    }
}

export default App;