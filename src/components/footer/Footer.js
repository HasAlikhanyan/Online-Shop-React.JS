import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";


function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-5'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
            </div>

            <div>
            <a href='https://www.facebook.com/' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='https://twitter.com/' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
            </a>
            <a href='https://www.instagram.com/' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
            </a>
            </div>
        </section>

        <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    <div className='title-wrapper mb-3 mx-0'>
                        <div className='name'>H & Z Fashion</div> <hr></hr>
                        <div className='fashion'>BOUTIQUE</div>
                    </div>
                <p>
                Copyright ©2023 All rights reserved | Made with  by Colorlib & distributed by ThemeWagon
                </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <p>
                    <a href='#!' className='text-reset'>
                    About
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Blog
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Fax
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Returns
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Contact
                    </a>
                </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <p>
                    <a href='#!' className='text-reset'>
                    My account
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Shipping
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Our Policies
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Afiliates
                    </a>
                </p>
                </MDBCol>

                <section className=''>
                <form action=''>
                    <MDBRow className='d-flex justify-content-center'>
                    <MDBCol size="auto">
                        <p className='pt-2'>
                        <strong>Subscribe to our newsletter</strong>
                        </p>
                    </MDBCol>

                    <MDBCol md='5' start>
                        <MDBInput contrast type='email' placeholder='Email address' className='mb-4' />
                    </MDBCol>

                    <MDBCol size="auto">
                        <MDBBtn outline color='dark' type='submit' className='mb-4'>
                        Subscribe
                        </MDBBtn>
                    </MDBCol>
                    </MDBRow>
                </form>
            </section>
            </MDBRow>
            </MDBContainer>
        </section>
        <div className='d-flex justify-content-center mb-4'> 
            <div className="social-sites-links">
                <Link to="https://www.facebook.com" className='social-sites-link' target='_blank'>
                    <img src="https://w7.pngwing.com/pngs/404/327/png-transparent-black-facebook-logo-computer-icons-social-media-youtube-facebook-messenger-social-media-logo-internet-social-network.png" alt="" className='social-site-logo logo-fb'></img>
                </Link>
                <Link to="https://www.instagram.com" className='social-sites-link' target='_blank'>
                    <img src="https://w7.pngwing.com/pngs/918/501/png-transparent-youtube-facebook-inc-computer-icons-linkedin-unmanned-aircraft-communication-technology-logo-linkedin-black-and-white.png" alt="" className='social-site-logo'></img>
                </Link>
                <Link to="https://www.twitter.com" className='social-sites-link' target='_blank'>
                    <img src="https://w7.pngwing.com/pngs/965/519/png-transparent-computer-icons-twitter-black-logo-computer-wallpaper-monochrome.png" alt="" className='social-site-logo'></img>
                </Link> 
            </div>
        </div>
        </MDBFooter>
    );
}

export default Footer;