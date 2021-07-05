import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [ cart, setCart] = useState([]);


    const handleAddProduct = (product) => {
    //  console.log('click here',product);
     const newCart = [...cart, product];
     setCart(newCart);
    }

    return (
        <div className="shop-continer">
            <div className="product-container">

                {
                    products.map(product => <Product
                     handleAddProduct = {handleAddProduct}
                    product={product}>

                    </Product>)
                }



            </div>
            <div className="cart-container">
              <Cart cart={cart}/>
            </div>


        </div>
    );
};

export default Shop;