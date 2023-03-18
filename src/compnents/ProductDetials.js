import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import { AddToCart } from '../Feature/Cart';


import { useDispatch } from "react-redux";

import './ProductDetails.css'

function ProductDetail() {


    const { cartItems } = useSelector((store) => store.cart)

    const { productId } = useParams()
    const thisProduct = cartItems.find(prod => prod.id === productId);
    // console.log(thisProduct.id, "this")

    const Dispatch = useDispatch();

    return (
        <div>
            <Container>
                <Row>
                    <Col key={thisProduct.id}>
                        <div className="details-page-section">


                            <img src={thisProduct.img} />
                            <h1>{thisProduct.title}</h1>
                            <p>Price: ${thisProduct.price}</p>
                            <p>{thisProduct.description}</p>

                        </div>

                        <Button variant="outline-warning" className="fea-button" onClick={() => Dispatch(AddToCart(thisProduct.id))}>Add to cart</Button>

                        <Button variant="outline-warning" className="fea-button"><Link to={`/`}>Go to back</Link>
                        </Button>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetail