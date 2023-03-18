import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decriment, RemoveItem } from '../Feature/Cart';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import './Summary.css'


const Summary = () => {
    const { ADD_Details } = useSelector((store) => store.cart);
    const Dispatch = useDispatch()
    return (
        < Container >
            <Row className='Model-section'>

                {

                    ADD_Details.map((item) => {

                        return (<>

                            <Col md={6}>

                                <div className='CardClass'>

                                    <img src={item.img} />
                                    <h4>{item.title}</h4>
                                    <b>{item.price}</b>
                                    <p>{item.description}</p>


                                    <div className='upDownSection'>
                                        <div onClick={() => Dispatch(Increment(item.id))}><SlArrowUp /></div>
                                        {item.amount}
                                        <div onClick={() => Dispatch(Decriment(item.id))}><SlArrowDown /></div>
                                    </div>

                                </div>
                                <button className="Remove-button" onClick={() => Dispatch(RemoveItem(item.id))}>Remove</button>

                            </Col>

                        </>)

                    })}




            </Row>

        </Container >






    )
}

export default Summary