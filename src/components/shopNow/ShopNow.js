import './shopNow.css';

import {Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function ShopNow() {
    return(
        <Container>
            <Row>
                <Col lg={6} md={6} xs={12} className = 'justify-content-center mt-3 first-line-free-sheeping-wrapper'>
                    <div className='free-sheeping'>
                        <h4>Free Shipping & Returns</h4>
                        <h5>Buy now</h5>
                    </div>
                    <div className='dresses-discount'>
                    <h4>20% Discount for all dresses</h4>
                        <h5>USE CODE: Colorlib</h5>
                    </div>
                    <div className='students-discount'>
                    <h4>20% Discount for students</h4>
                        <h5>USE CODE: Colorlib</h5>
                    </div>
                </Col>
            </Row>
        </Container>    
    )
}

export default ShopNow;