import './home.css';

import React, { useState, memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { Button } from 'react-bootstrap';

import Footer from '../footer/Footer';
import ShopNow from '../shopNow/ShopNow';
import ProductDetails from '../pages/productDetails/ProductDetails';


const allProducts = [{
    image: "https://on-desktop.com/wps/2021Men_Smiling_young_man_in_suit_151036_.jpg",
    price: "39.90$",
    description: "Jeans midi cocktail dress",
    id: 31,
    category: "man"
},
{
    image: "https://get.wallhere.com/photo/women-model-hat-photography-fashion-paint-splatter-Miranda-Kerr-spring-beauty-season-photo-shoot-formal-wear-204036.jpg",
    price: "56.10$",
    description: "Jeans midi cocktail dress",
    id: 32,
    category: "woman"
},
{
    image: "https://sc04.alicdn.com/kf/HTB1NW34QXXXXXacXXXXq6xXFXXXk.jpg",
    price: "36.70$",
    description: "Jeans midi cocktail dress",
    id: 33,
    category: "kids"
},
{
    image: "https://st03.kakprosto.ru/images/article/2014/4/18/138106_5351267b13d085351267b13d43.jpeg",
    price: "29.30$",
    description: "Jeans midi cocktail dress",
    id: 34,
    category: "accessories"
},
{
    image: "https://img1.goodfon.com/original/6496x4330/3/bb/devushka-sumka-plate-tufli.jpg",
    price: "63.00$",
    description: "Jeans midi cocktail dress",
    id: 35,
    category: "shoes"
},
{
    image: "https://i.pinimg.com/originals/d5/2f/1d/d52f1d3ba0cfbb370989ab1271bb6f5e.jpg",
    price: "42.80$",
    description: "Jeans midi cocktail dress",
    id: 36,
    category: "man"
},

]

function Home (){
    const [products, setProducts] = useState(allProducts);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,       
        autoplaySpeed: 3000,
    };

    const filterProducts = (category) => {
        const filteredProducts =  allProducts.filter(product =>{
            return product.category === category;
        });
        setProducts(filteredProducts);
    }

    const sliderImages=[
        {
            image: "https://bellazon.com/main/uploads/monthly_07_2013/post-34874-0-90880700-1372710470.jpg",
            description: "ON ACCESORIES",
            sale: "SALE 30%",
        },
        {
            image: "http://cstor.nn2.ru/blog/data/blog/2019-04/1976576_1554538459.jpg",
            description: "IN BAGS EXCEPTING THE NEW COLLECTION",
            sale: "SALE 40%",
        },
        {
            image: "https://www.desktopbackground.org/download/1400x1050/2014/03/23/735683_red-dress-fashion-girl_1920x1080_h.jpg",
            description: "IN DRESSES EXCEPTING THE NEW COLLECTION",
            sale: "SALE 60%",
        },
        {
            image: "https://i.pinimg.com/originals/07/29/c0/0729c06f1555afd86d5bc7589f4068e2.jpg",
            description: "IN KIDS DRESSES EXCEPTING THE NEW COLLECTION",
            sale: "SALE 360%",
        },

    ]

    return (
        <div className="wrapper">
        <ShopNow/>

        <Container>
            <Row>
                <Col lg={6} md={6} xs={12} className = 'justify-content-center mt-3 shop-now-wrapper'>
                    
                <div className="shop-now-img-wrapper">
                    <Slider {...settings}>
                    {sliderImages.map((item, index) => (
                        <div key = {index} className='slide-container'>
                            <img src={item.image} alt="" className='shop-now-img'></img>
                            <div className="slide-text" >
                                <div className="slide-text-discrtiption" style={{fontSize:"15px"}}>{item.description}</div>
                                <h2 className="slide-text-title" style={{fontSize:"35px"}}>{item.sale}</h2>
                                <Button variant='light' size="bg" className='slide-btn show-now-btn'>SHOP NOW</Button>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>

                </Col>
            </Row>
        </Container>   

            <h3 className="new-arrivals-title">NEW ARRIVALS</h3>

            <div className="products-filter-container">
                <div className="all-products products-type" onClick={()=>setProducts(allProducts)}>ALL</div>
                <div className="woman-products products-type" onClick={()=>filterProducts("woman")}>WOMAN</div>
                <div className="man-products products-type" onClick={()=>filterProducts("man")}>MAN</div>
                <div className="accessories-products products-type" onClick={()=>filterProducts("accessories")}>ACCESSORIES</div>
                <div className="shoes-products products-type" onClick={()=>filterProducts("shoes")}>SHOES</div>
                <div className="kids-products products-type" onClick={()=>filterProducts("kids")}>KIDS</div>
            </div>

            <ProductDetails data={products}/>

            <Footer/>

    </div>
    )
}

export default memo(Home);