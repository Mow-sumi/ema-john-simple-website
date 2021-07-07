import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import giphy from '../../images/giphy.gif';

import './Review.css';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [ orderPlaced , setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        clearLocalShoppingCart();
    }

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
    }, []);

    let ThankYou ;
    if(orderPlaced) {
       ThankYou = <img src={giphy} alt="" /> 
    }

    return (
        <div className="twin-continer">
       
         <div className="product-container">
                    {
                            cart.map(pd => <ReviewItem
                                key={pd.key} 
                            handleRemoveProduct = {handleRemoveProduct}
                                product={pd} />)
                        }


                        {
                            ThankYou
                        }
         </div>

         <div  className="cart-container">
          <Cart cart={cart}>
        <button className="btn" onClick ={handlePlaceOrder}>Place Ordered</button>
          </Cart>
         </div>

        </div>
    );
};

export default Review;