import { memo, useState} from 'react';


import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Modal from 'react-bootstrap/Modal';

import { useDispatch } from 'react-redux';
import { addCartProducts } from '../../redux/reducers/cartProductSlice';

import './productModal.css';

function ProductModal (props) {
    const [productNumber, setProductNumber] = useState(1);
    const [animatedProduct, setAnimatedProduct] = useState(false);


    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addCartProducts(item));
        setAnimatedProduct(true);
    };

    const increaseProductNumber = ()=> {
        setProductNumber(productNumber + 1);
    }

    const decreaseProductNumber = ()=> {
        if((productNumber-1)<0){
            return;
        }
        setProductNumber(productNumber - 1);
    }


    return (
        <Modal
            size="lg"
            show={true}
            onHide={props.hideModal}
            className={`product-modal-wrapper ${animatedProduct ? 'card-body fade-in-animation' : 'card-body'}`}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <div className='content-wrapper'>
                <img src={props.image} alt="" className='modal-product-image'></img>
                <div>
                    <h3>Boutique Silk Dress</h3>
                    <div>
                        <FontAwesomeIcon icon={faStar}  style={{ color: 'yellow' }} />
                        <FontAwesomeIcon icon={faStar}  style={{ color: 'yellow' }} />
                        <FontAwesomeIcon icon={faStar}  style={{ color: 'yellow' }} />
                        <FontAwesomeIcon icon={faStar}  style={{ color: 'yellow' }} />
                        <FontAwesomeIcon icon={faStar}  style={{ color: 'yellow' }} />
                    </div>
                    <div className='price'>{props.price} </div>
                    <div className='description'>{props.description} </div>

                    <div className='num-curt-wrapper'>
                        <div>
                            <span onClick={decreaseProductNumber} className='num-change'>-</span>
                            <span className='num'>{productNumber}</span>
                            <span onClick={increaseProductNumber}  className='num-change'>+</span>
                        </div>
                        <Button variant='danger' size='lg' onClick={()=>handleAddToCart({image:props.image, description:props.description, price:props.price, id:props.id})}>Add to cart</Button>
                    </div>

                    <h6>Share With Friend</h6>
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
            </div>
        </Modal>
    );
}


export default memo(ProductModal);
