import React from 'react';

import './SingleCard.css'

import { Link } from 'react-router-dom'


const SingleCard = ({ item }) => {

    return (
        <React.Fragment key={item.id}>
            <div className='CardSection'>
                <div className='SingleCardSection'>
                    <img src={item.img} />
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    <Link to={`/products/${item.id}`}>Product Details</Link>
                </div>
            </div>
        </React.Fragment>

    )
}

export default SingleCard