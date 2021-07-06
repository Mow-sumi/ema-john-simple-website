import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

import './Review.css';

const Review = () => {
    const [cart, setCart] = useState([]);

    const handleRemoveProduct = (productKey) =>{
        // console.log('clicked here',productKey);

        const newCart = cart.filter( pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);


        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.Quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])
    return (
        <div className="twin-continer">
       
         <div className="product-container">
                    {
                            cart.map(pd => <ReviewItem
                                key={pd.key} 
                            handleRemoveProduct = {handleRemoveProduct}
                                product={pd} />)
                        }
         </div>

         <div  className="cart-container">
          <Cart cart={cart} />
         </div>

        </div>
    );
};

export default Review;