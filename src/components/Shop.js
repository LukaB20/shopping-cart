import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import Cart from './Cart';
import ProductCard from './ProductCard';


export default function Shop({ data, cartItems, addToCart, total, deleteCartItem, incrementAmount, decrementAmount }) {

    const [cartToggle, setCartToggle] = useState(false);

    const toggleCart = () => {
        setCartToggle(!cartToggle);
    }

    const [productType, setProductType] = useState('Processor');

    const toggleShopProducts = (type) => {
        setProductType(type);
    }

  return (
    <div className='shop'>

        <Navbar txtColor='txt-black' toggleCart={toggleCart}/>

        <Cart toggled={cartToggle} toggleCart={toggleCart} cartItems={cartItems} total={total} decrementAmount={decrementAmount} incrementAmount={incrementAmount} />

        <div className="shop-container">

            <div className="shop-menu">

                <h1>Shop <span>/ Products</span></h1>

                <ul className="shop-nav">
                    <button onClick={() => {
                        toggleShopProducts('Processor');
                    }}>Processors <div className='shop-btn-animation-div'></div></button>
                    <button onClick={() => {
                        toggleShopProducts('Graphic Card');
                    }}>Graphic cards <div className='shop-btn-animation-div'></div></button>
                    <button onClick={() => {
                        toggleShopProducts('Ram');
                    }}>RAM <div className='shop-btn-animation-div'></div></button>
                    <button onClick={() => {
                        toggleShopProducts('SSD');
                    }}>Memory <div className='shop-btn-animation-div'></div></button>
                </ul>

            </div>

            <div className="shop-products">

                {
                    data.map((product) => {
                        if(product.type === productType)
                            return <ProductCard key={product.id} pId={product.id} img={product.img} name={product.name} price={product.price} addToCart={addToCart} />
                        else
                            return '';
                    })
                }
            </div>

        </div>

    </div>
  )
}
