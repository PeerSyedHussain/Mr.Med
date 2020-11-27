import React, { Component } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import About from './homepagelayouts/About';
import AssistanceProgram from './homepagelayouts/AssistanceProgram';
import ChronicDisease from './homepagelayouts/ChronicDisease';
import HealthConcernShop from './homepagelayouts/HealthConcernShop';
import Imported from './homepagelayouts/Imported';
import OurService from './homepagelayouts/OurService';
import Testimonial from './homepagelayouts/Testimonial';
import Testimonials from './homepagelayouts/Testimonials';
import WhySection from './homepagelayouts/WhySection';

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <section className='container'>
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
                    <OurService/>
                </section>
                <section>
                    <About/>
                </section>
                {/* <section>
                    <Testimonials/>
                </section> */}
            </>
        );
    }
}

export default App;