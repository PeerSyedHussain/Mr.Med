import React from 'react';
import logo from '../../assets/images/logo-transparent.png'


function About() {
    return (
        <>
            <div className='about-section py-4'>
                <div className='container for-xl-device'>
                    <div className='row'>
                        <div className='logo-pic'>
                            <img
                                src={logo}
                                className="d-inline-block align-top w-100"
                                alt="Mr Med Logo"
                            />
                        </div> 
                    </div>
                    <div className='row'>
                        <div className='col-md-11'>
                            <p className='company-desc'>
                                MR.MED – Buy Medicine Online from India’s 1st Specialty Pharmacy
                                MR.MED is the first choice of Indian Online Pharmacy for many satisfied 
                                customers for buy medicines online with discount for life-threatening diseases 
                                like cancer, HIV/AIDS, Hepatitis and many others, everyone knows how expensive 
                                medical treatment is & with the increasing cost of medicines it has become unaffordable 
                                to buy essential medicines.
                            </p>
                            <p className='company-desc'>
                                MR.MED offers specialty medicines that are not only difficult to find but are way to 
                                expensive. Specialty drugs or specialty pharmaceuticals are a designation of medicines 
                                that are classified as high-cost medicines & are used to treat complex or rare chronic 
                                conditions such as cancer, rheumatoid arthritis, hemophilia, H.I.V. psoriasis, inflammatory 
                                bowel disease and hepatitis C. With an average cost of more than ₹ 10000/- for a 
                                month of dosage such medicines are usually not available at a local brick & mortar 
                                chemist shop.
                            </p>
                            <p className='company-desc'>
                                MR.MED work 24×7 to make specialty medicines available to patients suffering from 
                                chronic diseases at lowest possible prices. Mr.med is fully dedicated in providing 
                                and making such medicines available to patients at the lowest possible prices, that’s 
                                why
                            </p>
                            <p className='company-desc'>
                                Now there is no need to worry about looking for genuine medicines from one local store to
                                another, waiting for your turn as mr.med has made it easy to purchase or order 
                                prescription drugs online by providing easy navigation throughout the website. 
                                Searching for medicines online, uploading drug prescription, add to cart, make
                                payment and checkout, all are very easy and simple process to follow. In short,
                                Mr.med is the best and complete healthcare partner for you.
                            </p>
                        </div>
                    </div>
                </div>  
            </div>  
        </>
    );
}

export default About;