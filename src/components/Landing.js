import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { useState } from 'react'

export default function Landing({ cartItems, total, incrementAmount, decrementAmount }) {

  const [cartToggle, setCartToggle] = useState(false);

    const toggleCart = () => {
        setCartToggle(!cartToggle);
    }

  return (
    <div className='landing'>
        <Navbar txtColor="txt-white" toggleCart={toggleCart}/>

        <h1>Nvidia GeForce RTX 3090</h1>

        <h3>Now available for preorder, shipping December, 2020.</h3>

        <h1><Link to='/shop' className='btn-shopNow'>Shop now<div className="border-move"></div></Link></h1>

        
        <Cart toggled={cartToggle} toggleCart={toggleCart} cartItems={cartItems} total={total} decrementAmount={decrementAmount} incrementAmount={incrementAmount} />
      

    </div>
  )
}
