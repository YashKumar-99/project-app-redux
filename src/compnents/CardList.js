import React from 'react';
import { useSelector } from 'react-redux';
import SingleCard from './SingleCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardList = () => {

    const { cartItems } = useSelector((store) => store.cart)

    return (

        <Container>

            <Row className='Card-section'>
                {cartItems.map((item) => {

                    return (<>



                        <Col md={4}>
                            <SingleCard key={item.id} item={item} />
                        </Col>

                    </>)
                })}
            </Row>
        </Container>





    )
}

export default CardList