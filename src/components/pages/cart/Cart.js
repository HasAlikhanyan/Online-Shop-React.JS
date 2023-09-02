import { useState, memo } from 'react';
import './cart.css';

import {Col, Card, Row, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { useDispatch, useSelector, } from 'react-redux';
import { removeCartProducts } from '../../../redux/reducers/cartProductSlice'; 

import Footer from '../../footer/Footer';
import ShopNow from '../../shopNow/ShopNow';

function Cart () {
    const [cartProductNumber, setCartProductNumber] = useState(1);
    const [cartProductItemId, setCartProductItomId] = useState(null);

    const cartProducts = useSelector(store => store.cartProducts.cartproducts);
    const dispatch = useDispatch();

    const increaseProductNumebr = (id) =>{
        setCartProductNumber(cartProductNumber + 1);
        setCartProductItomId(id);
    }

    const decreaseProductNumebr = (id) =>{
        if(cartProductNumber === 1) {
            return;
        }
        setCartProductNumber(cartProductNumber - 1);
        setCartProductItomId(id);
    }

    const handleRemoveFromCart = (item) => {
        dispatch(removeCartProducts(item));
    };

    return(
        <>
            <ShopNow/> 
            <Container>
            <Row>
                    {
                        cartProducts.map((item)=>{
                            const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
                            return (
                        
                                <Col lg={12} md={12} xs={12} className = 'justify-content-center mt-3' key={item.id}>

                                    <Card className="product" >
                                        <Card.Body className='card-body1'>
                    
                                            <img src={item.image} alt={item.description} className='product-image'></img>

                                            <div>
                                            <Card.Text 
                                                className="price mb-5">
                                                Price - {item.price}
                                            </Card.Text>

                                            <Card.Text 
                                                className="description mb-5">
                                                Description - {item.description}
                                            </Card.Text>

                                            <Card.Text 
                                                className="quantity mb-5">
                                                Quantity 
                                                <span onClick={()=>decreaseProductNumebr(item.id)} className='mx-3 number-change'>-</span>
                                                <span>{cartProductItemId===item.id ? cartProductNumber : 1}</span>
                                                <span onClick={()=>increaseProductNumebr(item.id)} className='mx-3 number-change'>+</span>
                                            </Card.Text>  

                                            <Card.Text 
                                                className="total mb-5">
                                                Total  -  $ <span>{parseFloat(( cartProductItemId===item.id ? price*cartProductNumber : price).toFixed(2))}</span>
                                            </Card.Text>  

                                            <Button size="bg" variant="secondary"
                                            onClick={()=>handleRemoveFromCart(item)}
                                            >Remove</Button>   

                                            </div>                                             
                                        </Card.Body>

                                    </Card>

                                </Col>
                        
                            )
                        })
                    }
            </Row>

        </Container>  

        <Footer/>
        </>
    )
}

export default memo(Cart);