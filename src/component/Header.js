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
import { Switch,Route,Link } from "react-router-dom"
class Header extends Component {
  
    render() {
        return (
            <>
                <section id='header'>
                    <Navbar className='container for-xl-device' bg="white" expand="lg">
                        <Link to='/' className='navbar-brand'>
                            <img
                                src={logo}
                                className="d-inline-block align-top logo-img"
                                alt="Mr Med Logo"
                            />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className='col-md-7 basic-details'>
                                <Form className='col-md-4'>
                                    <img
                                        src={Mappin}
                                        className="d-inline-block align-top mappin-icon"
                                        alt="Map pin"
                                    />
                                    <select className='city-select'>
                                        <option value='' disabled selected>select your city</option>
                                        <option value='choco'>Choco</option>
                                        <option value='choco1'>Choco1</option>
                                        <option value='choco2'>Choco2</option>
                                        <option value='choco3'>Choco3</option>
                                        <option value='choco4'>Choco4</option>
                                    </select>
                                    {/* <img
                                        src={location}
                                        className="d-inline-block align-top location-icon"
                                        alt="location"
                                    /> */}
                                </Form>
                                <span className='separator-grey'></span>
                                <Form inline className='col-md-8'>
                                    <FormControl type="text" placeholder="Search for medicines and health products" className="mr-sm-2 medicine-search-box" />
                                    <img
                                        src={search}
                                        className="d-inline-block align-top search-icon"
                                        alt="location"
                                    />
                                </Form>
                            </div>
                            <div className='col-md-5 pr-0'>
                                <div className='d-flex align-items-center justify-content-around help-sec'>
                                    <div className='mx-2 for-xs-position-login'>
                                        <p className='mb-0 text-grey help-option'>
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
                                        <p className='mb-0 text-grey help-option'>
                                            <img
                                                src={ Cart }
                                                className="d-inline-block align-top mx-2"
                                                alt="cart"
                                            />
                                            Cart
                                        </p>
                                    </div>
                                    <Button className='upload-btn '>
                                        Upload Prescription
                                    </Button>
                                </div>                                
                               
                            </div>        
                        </Navbar.Collapse>
                    </Navbar>
                </section>
                <section className='movable-header'>
                    <div className='shadowing'>
                        <div className='container for-xl-device'>
                            <div className='row align-items-center'>
                                <div className='col-md-7'>
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
                                <div className='col-md-5'>
                                    <div className='help-sec'>
                                        <div className=''>
                                            <p className='mb-0 text-grey d-flex align-items-center help-option'>
                                                <img
                                                    src={ Whatsapp }
                                                    className="d-inline-block align-top mx-2"
                                                    alt="whatsapp"
                                                />
                                                +91 9090909090
                                            </p>
                                        </div>
                                        <span className='separator-black mx-2'></span>
                                        <div>
                                            <p className='mb-0 text-grey help-option'>
                                                <img
                                                    src={ Headset }
                                                    className="d-inline-block align-top mx-2"
                                                    alt="headset"
                                                />
                                                Need Help ?                                               
                                            </p>
                                        </div>
                                        <div className='ml-auto'>
                                            <p className='mb-0 text-grey help-option'>
                                                EN
                                                <i className="fa fa-angle-down mx-1"></i>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>                  
                </section>
                {/* <Switch>
                    <Route exact path="/">
                        <Footer/>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch> */}
            </>
        );
    }
}

export default Header;