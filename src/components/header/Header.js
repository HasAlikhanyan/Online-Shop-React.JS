import { Button, Offcanvas, Nav, Form } from 'react-bootstrap';
import './header.css';

import { useState, memo } from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link} from "react-router-dom";

import { allProducts } from '../pages/shop/Shop';
import Products from '../products/Products';




function Header(){
    const activeLinkClassName = ({isActive}) =>isActive ? "active" : "normal";

    const [showSidebar, setShowSidebar] = useState(false);
    const [filteredProduct, setFilteredProducts] = useState([]);
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

    const handleCheckboxChange = (event) => {
        const checkboxName = event.target.name;
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedCheckboxes([...checkedCheckboxes, checkboxName]);
        } else {
            setCheckedCheckboxes(checkedCheckboxes.filter(name => name !== checkboxName));
        }
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const filterProducts = () => {
        const filteredProducts = allProducts.filter(product => {
            return checkedCheckboxes.includes(product.category);
        });

    
        setFilteredProducts(filteredProducts);    
    }

    const resetFilter = () => {
        setFilteredProducts([]);
        setCheckedCheckboxes([]);
    }


    return(
        <div className='header-container'>

            <div className='title-wrapper'>
                <div className='name'>H & Z Fashion</div> <hr></hr>
                <div className='fashion'>BOUTIQUE</div>
            </div>
            <NavDropdown title="Your Bag $20" id="nav-dropdown" className='nav-drop' >
                <NavDropdown.Item eventKey="4.1" className={activeLinkClassName} as={Link} to='/dresses'>
                    <div className='item-wrapper'>
                        <img src="https://yobte.ru/uploads/posts/2019-12/sasha-pivovarova-85-foto-31.jpg" className='item-img' alt=""></img>
                        <div>
                            <div>Women's fashion</div>
                            <div>1X - $10</div>
                        </div>
                    </div>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.1" className={activeLinkClassName} as={Link} to='/dresses'>
                    <div className='item-wrapper'>
                        <img src="http://klublady.ru/uploads/posts/2022-03/1646744735_65-klublady-ru-p-obraz-brendovie-sapogi-foto-69.jpg" className='item-img' alt=""></img>
                        <div>
                            <div>Women's fashion</div>
                            <div>1X - $10</div>
                        </div>
                    </div>
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="4.1" className={activeLinkClassName} as={Link} to='#'>
                    <div className='item-wrapper'>
                    <Link to="/cart">
                        <Button variant="secondary" size="sm" className="btn1">
                            Cart
                        </Button>
                    </Link>
                        <span>Total: $20.00</span>
                    </div>
                </NavDropdown.Item>
                
            </NavDropdown>

            <div>
                <Button variant="light" onClick={toggleSidebar} className="closed-menu closed-menu-wrapper">
                    <div className="line">___</div>
                    <div className="line"></div>
                    <div className="line"></div>
                </Button>
                <Offcanvas show={showSidebar} onHide={toggleSidebar} className="submenu">
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Categories</Offcanvas.Title>
                    </Offcanvas.Header>
                    {/* <Offcanvas.Body>
                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        name="group2"
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Woman wear" id="nav-dropdown" className='nav-dropdown-container'>
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Maxi dresses"
                                        name="group1"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Prom dresses"
                                        name="group1"
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Little black dresses"
                                        type='checkbox'
                                        id={`inline-checkbox-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Mini dresses"
                                        type='checkbox'
                                        id={`inline-checkbox-4`}
                                    />
                                </div>
                                
                            </NavDropdown>
                        </Nav>
                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        name="group2"
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Man wear" id="nav-dropdown" className='nav-dropdown-container'>
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Man dresses"
                                        name="group3"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Man black dresses"
                                        name="group3"
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Man mini dresses"
                                        name="group3"
                                        type='checkbox'
                                        id={`inline-checkbox-3`}
                                    />
                                </div>
                            
                            </NavDropdown>
                        </Nav>

                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        name="group2"
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Children" id="nav-dropdown" className='nav-dropdown-container'>
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Children dresses"
                                        name="group4"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Mini dresses"
                                        name="group3"
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                </div>
                            
                            </NavDropdown>
                        </Nav>

                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        name="group2"
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Bags & purses" id="nav-dropdown" className='nav-dropdown-container'>
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Bags"
                                        name="group5"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Purses"
                                        name="group5"
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                </div>
                            
                            </NavDropdown>
                        </Nav>

                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        name="group2"
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Eyewear" id="nav-dropdown" className='nav-dropdown-container'>
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Eyewear style 1"
                                        name="group6"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Eyewear style 2"
                                        name="group6"
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Eyewear style 3"
                                        name="group6"
                                        type='checkbox'
                                        id={`inline-checkbox-3`}
                                    />
                                </div>
                            
                            </NavDropdown>
                        </Nav>

                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper wrapper-end">
                        <Form.Check
                                        inline
                                        name="group2"
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Footwear" id="nav-dropdown" className='nav-dropdown-container'>
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Footwear 1"
                                        name="group7"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Footwear 2"
                                        name="group7"
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                </div>
                            
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body> */}

                    <Offcanvas.Body>
                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        name="woman"
                                        checked={checkedCheckboxes.includes("woman")}
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Woman wear" id="nav-dropdown" className='nav-dropdown-container'  >
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Maxi dresses"
                                        name="woman"
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Prom dresses"
                                        name="woman"
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Little black dresses"
                                        name="woman"
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Mini dresses"
                                        name="woman"
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-4`}
                                    />
                                </div>
                                
                            </NavDropdown>
                        </Nav>
                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        type='checkbox'
                                        name="man"
                                        checked={checkedCheckboxes.includes("man")}
                                        onChange={handleCheckboxChange}
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Man wear" id="nav-dropdown" className='nav-dropdown-container'  name="man" onChange={handleCheckboxChange}  >
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Man dresses"
                                        type='checkbox'
                                        name="man"
                                        onChange={handleCheckboxChange}
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Man black dresses"
                                        type='checkbox'
                                        name="man"
                                        onChange={handleCheckboxChange}
                                        id={`inline-checkbox-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Man mini dresses"
                                        name="man"
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-3`}
                                    />
                                </div>
                            
                            </NavDropdown>
                        </Nav>

                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        name="kids"
                                        checked={checkedCheckboxes.includes("kids")}
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Children" id="nav-dropdown" className='nav-dropdown-container' name="kids" onChange={handleCheckboxChange}>
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Children dresses"
                                        name="kids"
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Mini dresses"
                                        name="kids"
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                </div>
                            
                            </NavDropdown>
                        </Nav>

                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper">
                        <Form.Check
                                        inline
                                        name="accessories"
                                        checked={checkedCheckboxes.includes("accessories")}
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Accessories, bags & purses" id="nav-dropdown" className='nav-dropdown-container' name="accessories" onChange={handleCheckboxChange}>
                                <div className='checkbox-wrapper'>
                                    <Form.Check
                                        inline
                                        label="Bags"
                                        name="accessories"
                                        checked={checkedCheckboxes.includes("accessories")}
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Purses"
                                        name="accessories"
                                        checked={checkedCheckboxes.includes("accessories")}
                                        onChange={handleCheckboxChange}
                                        type='checkbox'
                                        id={`inline-checkbox-2`}
                                    />
                                </div>
                            
                            </NavDropdown>
                        </Nav>

                    </Offcanvas.Body>
                    <div className=' mt-3 mb-3 filter-btns-container'>
                        <Button variant="danger" size="bg" className="filter-button" onClick={filterProducts}>FILTER</Button>
                        <Button variant="secondary" size="bg" className="filter-button" onClick={resetFilter}>RESET FILTER</Button>
                    </div>

                </Offcanvas>
                
                {filteredProduct.length !== 0
                ? <Products data={filteredProduct} className=''/> 
                : ""
                }

            </div>
        </div>
    )
}

export default memo(Header);