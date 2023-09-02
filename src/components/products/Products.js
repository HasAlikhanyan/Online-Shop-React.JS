import './products.css';

import {Col, Card, Row, Nav} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import { useState,  useEffect, memo } from 'react';

import { useDispatch } from 'react-redux';
import { addCartProducts } from '../../redux/reducers/cartProductSlice';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


function Products(props){
    const [animatedId, setAnimatedId] = useState(-1);
    const [animateProducts, setAnimateProducts] = useState(false);

    useEffect(() => {
        setAnimateProducts(true);
    }, []);
    
    const {data, showProductModal} = props;
    const cartProductsLength = useSelector(store => store.cartProducts.cartproducts.length);


    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addCartProducts(item));
        setAnimatedId(item.id);
    };

    return (
        <Container>
            <Row>
                {cartProductsLength >= 1 ? (
                    <Nav className="sticky-top bg-body-tertiary cart-number-button">
                        <div className="container-fluid d-flex justify-content-end">
                        <Link to="/cart" className='cart-link'>
                            <div className="cart-number-wrapper">
                                <img src= "https://razzle-dazzle.co.uk/wp-content/uploads/2020/06/logo-shopping-cart.jpg" alt="" className='cart-icon'></img>
                                <span className='cart-products-number'>{cartProductsLength}</span>
                            </div>
                        </Link>
                        </div>
                    </Nav>
                    ) : (
                    ''
                    )}

                    {
                        data.map((item)=>{
                            return (
                        
                                <Col lg={4} md={6} xs={12} 
                                    className={`justify-content-center mt-3 ${animateProducts ? 'fade-in-animation' : ''}`} 
                                    key={item.id}>
                                    <Card className="product" >
                                        <Card.Body className={animatedId === item.id 
                                                                ? 'card-body fade-in-animation' 
                                                                : 'card-body'
                                                            }
                                        onClick={()=>showProductModal(item.image, item.price, item.description, item.id)}>
                                            <img src={item.image} 
                                            alt={item.description} 
                                            className='product-image'>
                                            </img>

                                            <Card.Text 
                                                className="price">
                                                {item.price}
                                            </Card.Text>

                                            <Card.Text 
                                                className="description">
                                                {item.description}
                                            </Card.Text>   
                                        </Card.Body>
                                        <Card.Text 
                                                className="add-to-cart"
                                                onClick={()=>handleAddToCart(item)}
                                                >
                                                ADD TO CARD
                                            </Card.Text>  
                                    </Card>
                                </Col>                             
                            )
                        })
                        
                    }                
            </Row>
        </Container>       
    )
}

export default memo(Products);