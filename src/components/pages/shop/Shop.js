import './shop.css';

import { Container, Row, Col, Offcanvas, Nav, Form, Button } from 'react-bootstrap';

import Products from '../../products/Products';
import ProductModal from '../../productModal/ProductModall';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

import ShopNow from '../../shopNow/ShopNow';
import Footer from '../../footer/Footer';


const allProducts = [{
    image: "https://on-desktop.com/wps/2021Men_Smiling_young_man_in_suit_151036_.jpg",
    price: "39.90$",
    description: "Jeans midi cocktail dress",
    color: "grey",
    category: "man",
    id: 1,
},
{
    image: "https://get.wallhere.com/photo/women-model-hat-photography-fashion-paint-splatter-Miranda-Kerr-spring-beauty-season-photo-shoot-formal-wear-204036.jpg",
    price: "56.10$",
    description: "Jeans midi cocktail dress",
    color: "yellow",
    category: "woman",
    id: 2,
},
{
    image: "https://sc04.alicdn.com/kf/HTB1NW34QXXXXXacXXXXq6xXFXXXk.jpg",
    price: "36.70$",
    description: "Jeans midi cocktail dress",
    color: "blue",
    category: "kids",
    id: 3,
},
{
    image: "https://i.pinimg.com/originals/45/67/bf/4567bfc6061dd91148313bd5ccb68868.jpg",
    price: "401.30$",
    description: "Jeans midi cocktail dress",
    color: "blue",
    category: "accessories",
    id: 4,
},
{
    image: "https://cdn.pixabay.com/photo/2016/11/29/04/23/little-girl-1867297_1280.jpg",
    price: "301.30$",
    description: "Jeans midi cocktail dress",
    color: "blue",
    category: "kids",
    id: 5,
},
{
    image: "https://img1.goodfon.com/original/6496x4330/3/bb/devushka-sumka-plate-tufli.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    color: "yellow",
    category: "shoes",
    id: 6,
},
{
    image: "https://i.pinimg.com/originals/d5/2f/1d/d52f1d3ba0cfbb370989ab1271bb6f5e.jpg",
    price: "42.80$",
    description: "Jeans midi cocktail dress",
    color: "grey",
    category: "man",
    id: 7,
},
{
    image: "https://w.forfun.com/fetch/03/0367a9442c2b8e5d06d15e9e49be043b.jpeg",
    price: "56.10$",
    description: "Jeans midi cocktail dress",
    color: "red",
    category: "woman",
    id: 8,
},
{
    image: "https://images.hdqwalls.com/download/women-dress-bokeh-sitting-stilettos-model-stairs-xc-2560x1440.jpg",
    price: "306.70$",
    description: "Jeans midi cocktail dress",
    color: "yellow",
    category: "woman",
    id: 9,
},
{
    image: "https://w.forfun.com/fetch/6f/6f15750557302af0248c43f989aa734d.jpeg",
    price: "29.30$",
    description: "Jeans midi cocktail dress",
    color: "red",
    category: "woman",
    id: 10,
},
{
    image: "https://i.pinimg.com/736x/c9/df/dc/c9dfdc7433144796c97e501b06e68281.jpg",
    price: "203.30$",
    description: "Jeans midi cocktail dress",
    color: "red",
    category: "accessories",
    id: 11,
},
{
    image: "https://i.pinimg.com/originals/eb/72/62/eb72620f28b067953592af59c6649d4d.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    color: "green",
    category: "woman",
    id: 12,
},
{
    image: "https://sun6-21.userapi.com/s/v1/if1/Vj3VgPt-9qBUZasAUoCos0ESlOk_inTl1MrUjv84ocVS7KcKIpi4CXQ9005ocYtzhBcNKfhs.jpg?size=1998x2000&quality=96&crop=430,12,1998,2000&ava=1",
    price: "42.80$",
    description: "Jeans midi cocktail dress",
    color: "grey",
    category: "shoes",
    id: 13,
},
{
    image: "https://w.forfun.com/fetch/6f/6f15750557302af0248c43f989aa734d.jpeg",
    price: "29.30$",
    description: "Jeans midi cocktail dress",
    color: "red",
    category: "woman",
    id: 14,
},
{
    image: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612282842_10-p-zhenshchina-na-fioletovom-fone-17.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    color: "purple",
    category: "woman",
    id: 15,
},
{
    image: "https://i.pinimg.com/originals/cf/ac/17/cfac17d5150fad7da31225b5402d8ac6.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    color: "purple",
    category: "woman",
    id: 16,
},
{
    image: "https://mykaleidoscope.ru/uploads/posts/2022-12/1672360711_mykaleidoscope-ru-p-plate-zelenogo-tsveta-devushki-pinterest-65.jpg",
    price: "105.30$",
    description: "Jeans midi cocktail dress",
    color: "green",
    category: "woman",
    id: 17,
},
{
    image: "https://img1.goodfon.com/original/6496x4330/3/bb/devushka-sumka-plate-tufli.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    color: "yellow",
    category: "shoes",
    id: 18,
},

]

function Shop() {
    const [isOpenProductModal, setIsOpenProductModal] = useState(false);
    const [productImage, setProductImage] = useState(null);
    const [productPrice, setProductPrice] = useState(null);
    const [productDescription, setProductDescription] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredPriceValue, setFilteredPriceValue] = useState(900);
    const [filteredColor, setFilteredColor] = useState("");

    const productsPerPage = 6;
    const numberOfColorProducts = 3;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    let visibleProducts = allProducts.slice(startIndex, endIndex);

    const [filteredProduct, setFilteredProducts] = useState(visibleProducts);
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


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const showProductModal = (image, price, description) => {
        setIsOpenProductModal(true);
        setProductImage(image);
        setProductPrice(price);
        setProductDescription(description);
    
    }
    
    const hideProductModal = () => {
        setIsOpenProductModal(false);
    }

    const handleFilteredPriceRangeChange = (event) => {
        setFilteredPriceValue(parseInt(event.target.value, 10));
    };
    
    const filterProducts = () => {
        const filteredProducts = allProducts.filter(product => {
            const colorMatch = product.color === filteredColor;
            const priceMatch = parseFloat(product.price.replace(/[^\d.-]/g, "")) <= filteredPriceValue;
            const categoryMatch = checkedCheckboxes.includes(product.category);

            console.log(`Category: ${product.category}, Category Match: ${categoryMatch}`);

            return colorMatch && priceMatch && categoryMatch;
        });

        console.log(filteredProducts);
    
        setFilteredProducts(filteredProducts.slice(startIndex, endIndex));    
    }

    const resetFilter = () => {
        setFilteredProducts(visibleProducts)
        setCheckedCheckboxes([]);
    }

    return (
        <>
        <ShopNow/>

        <div className="app">
            <Container fluid>
                <Row>
                {/* Left Sidebar */}
                <Col md={3} className="sidebar">
                <Offcanvas.Title className='mt-4 mb-4 mx-4'>Categories</Offcanvas.Title>
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

                        <Nav defaultActiveKey="/home" className="flex-column nav-wrapper wrapper-end">
                        <Form.Check
                                        inline
                                        name="group2"
                                        type='checkbox'
                                        id={`inline-checkbox-0`}
                                        className='checkbox2'
                                    />
                            <NavDropdown title="Footwear" id="nav-dropdown" className='nav-dropdown-container'  name="shoes" onChange={handleCheckboxChange}>
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
                    </Offcanvas.Body>

                    <div className="filter-container">
                        <h6 className='mt-4 mb-3'>Filter by price</h6>
                        <input
                            type="range"
                            name="cowbell"
                            min="0"
                            max="900"
                            value={filteredPriceValue}
                            onChange={handleFilteredPriceRangeChange}
                            step="10"
                            className="range-input"
                        />
                        <p className='mt-3'>PRICE: $0 - ${filteredPriceValue}</p>
                    
                    </div>

                    <hr></hr>

                    <div className="filter-container">
                        <h6 className='mt-4 mb-3'>Filter by color</h6>
                        <div className='colors-filter-container'>
                            <div className='colors-container'>
                                <div className='grey color' onClick={()=>setFilteredColor("grey")}></div>
                                <p>{numberOfColorProducts}</p>
                            </div>
                            <div className='colors-container'>
                                <div className='red color' onClick={()=>setFilteredColor("red")}></div>
                                <p>{numberOfColorProducts}</p>
                            </div>
                            <div className='colors-container'>
                                <div className='yellow color' onClick={()=>setFilteredColor("yellow")}></div>
                                <p>{numberOfColorProducts}</p>
                            </div>
                            <div className='colors-container'>
                                <div className='green color' onClick={()=>setFilteredColor("green")}></div>
                                <p>{numberOfColorProducts}</p>
                            </div>
                            <div className='colors-container'>
                                <div className='purple color' onClick={()=>setFilteredColor("purple")}></div>
                                <p>{numberOfColorProducts}</p>
                            </div>
                            <div className='colors-container'>
                                <div className='blue color' onClick={()=>setFilteredColor("blue")}></div>
                                <p>{numberOfColorProducts}</p>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className=' mt-3 mb-3 filter-btns-container'>
                        <Button variant="danger" size="bg" className="filter-button" onClick={filterProducts}>FILTER</Button>
                        <Button variant="secondary" size="bg" className="filter-button" onClick={resetFilter}>RESET FILTER</Button>
                    </div>

                    <hr></hr>



                    {/* Sidebar content goes here */}
                </Col>

                {/* Main Content */}
                <Col md={9} className="main-content">

                {filteredColor || filteredPriceValue !== 900 
                ? <Products data={filteredProduct} showProductModal={showProductModal}/> 
                : <Products data={visibleProducts} showProductModal={showProductModal}/>
                }
                    {isOpenProductModal && 
                    <ProductModal
                        hideModal = {hideProductModal}
                        image = {productImage}
                        price = {productPrice}
                        description = {productDescription}
                />
            }

            <div className='mt-5 pages-num-container'>
                <span className='pages-number' onClick={()=>handlePageChange(1)}>1</span>
                <span className='pages-number' onClick={()=>handlePageChange(2)}>2</span>
                <span className='pages-number' onClick={()=>handlePageChange(3)}>3</span>
            </div>
                    {/* Main content goes here */}

                </Col>

                </Row>

            </Container>

            {/* Footer */}
            <footer className="footer">
                <Container>
                <Row>
                    <Col md={12}>
                        <Footer/>
                    {/* Footer content goes here */}
                    </Col>
                </Row>
                </Container>
            </footer>
        </div>


        </>
    )
}

export default Shop;
export {allProducts};