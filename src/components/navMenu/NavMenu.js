import './navMenu.css';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';

import {NavLink, Link} from "react-router-dom";

function NavMenu() {
    const activeLinkClassName = ({isActive}) =>isActive ? "active" : "normal";

    return(
        <div className='nav-menu-wrapper mt-5 mb-5'>
                <div className="social-sites-links">
                <span className='info'>Share</span>

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

                <Navbar bg="light" expand="sm" className="sticky-top bg-body-tertiary">
                    <Container fluid className="pagesContainer"> 
                    <span className='info' style={{left:"50%"}}>Hot</span>

                        
                        <Navbar.Brand>
                            <NavLink to="/" className={activeLinkClassName}>
                                HOME
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavDropdown title="PAGES" id="nav-dropdown" >
                                <NavDropdown.Item eventKey="4.1" className={activeLinkClassName} as={Link} to='/'>HOME</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2" className={activeLinkClassName} as={Link} to='/shop'>SHOP</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2" className={activeLinkClassName} as={Link} to='/productDetails'>PRODUCT DETAILS</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2" className={activeLinkClassName} as={Link} to='/cart'>CART</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 navContainer">
                            <Navbar.Brand>
                                <NavLink to="/dresses" className={activeLinkClassName}>DRESSES</NavLink>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <NavLink to="/shoes" className={activeLinkClassName}>SHOES</NavLink>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <NavLink to="/contact" className={activeLinkClassName}>CONTACT</NavLink>
                            </Navbar.Brand> 
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <span className='tel'><a className="tel1" href="tel:+346573556778">+34 657 3556 778</a></span>
        
        </div>
      

 
    )

}

export default NavMenu;