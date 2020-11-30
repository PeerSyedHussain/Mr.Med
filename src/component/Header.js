import React, { Component } from 'react';
import { Navbar,Form,FormControl,Button } from 'react-bootstrap';
import logo from './../assets/images/mr-med-logo.png';
import Mappin from './../assets/images/icons/map-pin.png';
import location from './../assets/images/icons/location-track.png';
import search from './../assets/images/icons/search.png';
import wellness from './../assets/images/icons/wellness.png'
import spec_medicine from './../assets/images/icons/spec_medicine.png'
import patient_asst from './../assets/images/icons/patient_asst.png'
import impo_medi_ from './../assets/images/icons/impo_medi.png'
import Headset from './../assets/images/icons/headset.png'
import Whatsapp from './../assets/images/icons/whatsapp.png'
import UserImg from './../assets/images/icons/user.png';
import Cart from './../assets/images/icons/cart.png'
class Header extends Component {
  
    render() {
        return (
            <>
                <section id='header'>
                    <Navbar className='container' bg="white" expand="lg">
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                className="d-inline-block align-top logo-img"
                                alt="Mr Med Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className='col-md-8 basic-details'>
                                <Form className='col-md-4'>
                                    <img
                                        src={Mappin}
                                        className="d-inline-block align-top mappin-icon"
                                        alt="Map pin"
                                    />
                                    <select className='city-select'>
                                        <option value=''>select your city</option>
                                        <option value='choco'>Choco</option>
                                        <option value='choco1'>Choco1</option>
                                        <option value='choco2'>Choco2</option>
                                        <option value='choco3'>Choco3</option>
                                        <option value='choco4'>Choco4</option>
                                    </select>
                                    <img
                                        src={location}
                                        className="d-inline-block align-top location-icon"
                                        alt="location"
                                    />
                                </Form>
                                <span className='separator-black'></span>
                                <Form inline className='col-md-8'>
                                    <FormControl type="text" placeholder="Search for medicines and health products" className="mr-sm-2 medicine-search-box" />
                                    <img
                                        src={search}
                                        className="d-inline-block align-top search-icon"
                                        alt="location"
                                    />
                                </Form>
                            </div>
                            <div className='col-md-4 pr-0'>
                                <Button className='upload-btn ml-auto'>
                                    Upload Prescription
                                </Button>
                            </div>        
                        </Navbar.Collapse>
                    </Navbar>
                </section>
                <section className='movable-header'>
                    <div className='separator-header-sec py-2'>
                        <div className='container'>
                            <div className='row justify-content-between align-items-center'>
                                <div className='row'>
                                        <div>
                                            <p className='mb-0 text-grey'>
                                                EN
                                                <i class="fa fa-angle-down mx-1"></i>
                                            </p>
                                        </div>
                                        <div>
                                            <p className='mb-0 text-grey'>
                                                <img
                                                    src={ Headset }
                                                    className="d-inline-block align-top mx-2"
                                                    alt="headset"
                                                />
                                                Need Help ?                                               
                                            </p>
                                        </div>
                                </div>
                                <div className='row for-small-mobile-dev'>
                                        <div className='mr-2'>
                                            <p className='mb-0 text-grey d-flex align-items-center'>
                                                <img
                                                    src={ Whatsapp }
                                                    className="d-inline-block align-top mx-2"
                                                    alt="whatsapp"
                                                />
                                                +91 9090909090
                                            </p>
                                        </div>
                                        <span className='separator-black'></span>
                                        <div className='mx-2 for-xs-position-login'>
                                            <p className='mb-0 text-grey'>
                                                <img
                                                    src={ UserImg }
                                                    className="d-inline-block align-top mx-2"
                                                    alt="user-img"
                                                />
                                                Login / Sign up
                                            </p>
                                        </div>
                                        <span className='separator-black'></span>
                                        <div className='ml-2 for-xs-position-cart'>
                                            <p className='mb-0 text-grey'>
                                                <img
                                                    src={ Cart }
                                                    className="d-inline-block align-top mx-2"
                                                    alt="cart"
                                                />
                                                Cart
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadowing'>
                        <div className='container'>
                            <div className='user-optionality py-3'>
                                <div className='options'>
                                    <div className='option-bg bg-1 mr-2'>
                                        <img
                                            src={ wellness }
                                            className="d-inline-block align-top"
                                            alt="Map pin"
                                        />
                                    </div>
                                    <div>
                                        <p className='mb-0 option-heading'>Wellness</p>
                                    </div>
                                </div>
                                <div className='options'>
                                    <div className='option-bg bg-2 mr-2'>
                                        <img
                                            src={ spec_medicine }
                                            className="d-inline-block align-top"
                                            alt="Map pin"
                                        />
                                    </div>
                                    <div>
                                        <p className='mb-0 option-heading'>Speciality Medicines</p>
                                    </div>
                                </div>
                                <div className='options'>
                                    <div className='option-bg bg-3 mr-2'>
                                        <img
                                            src={ patient_asst }
                                            className="d-inline-block align-top"
                                            alt="Map pin"
                                        />
                                    </div>
                                    <div>
                                        <p className='mb-0 option-heading'>Patient Assistance Programme</p>
                                    </div>
                                </div>
                                <div className='options'>
                                    <div className='option-bg bg-4 mr-2'>
                                        <img
                                            src={ impo_medi_ }
                                            className="d-inline-block align-top"
                                            alt="Map pin"
                                        />
                                    </div>
                                    <div>
                                        <p className='mb-0 option-heading'>Imported Medicines</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>                  
                </section>
            </>
        );
    }
}

export default Header;