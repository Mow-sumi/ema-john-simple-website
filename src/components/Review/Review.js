import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

import './Review.css';

const Review = () => {
    const [cart, setCart] = useState([]);


    useEffect ( () => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);


        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.Quantity = savedCart[key];
            return product;
        });
     setCart(cartProducts);
    },[])
    return (
        <div>
            <h2>Cart Items : {cart.length}</h2>
          {
              cart.map( pd =>   <ReviewItem  key = {pd.key} product = {pd} />)
          }
           
        </div>
    );
};

export default Review;