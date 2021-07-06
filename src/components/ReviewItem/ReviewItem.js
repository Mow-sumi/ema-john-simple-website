import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
// console.log(props);
    const { name, quantity,key,price} = props.product;
    const reviewStyle = {
        borderBottom: '1px solid lightGray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft:'200px'
    }
    return (
        <div style = {reviewStyle}     className="review-item">
            <h2>{name}</h2>
            <p>Quantity : {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button 
            className="btn"
            onClick = {() => props.handleRemoveProduct(key)}
            >
         Removed</button>
        </div>
    );
};

export default ReviewItem;