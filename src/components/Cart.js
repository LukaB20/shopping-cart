import React from 'react'
import CartProduct from './CartProduct';

export default function Cart({ toggled, toggleCart, cartItems, total, deleteCartItem, incrementAmount, decrementAmount }) {
  return (
    <div className={toggled ? 'cart active' : 'cart'}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className='cart-toggle' onClick={() => {
            toggleCart();
          }}><i className="fa-solid fa-xmark"></i></button>
        </div>

          {
            cartItems.map((item) => {
              return <CartProduct key={item.id} pId={item.id}  type={item.type} name={item.name} price={item.price} img={item.img} amount={item.amount} incrementAmount={incrementAmount} decrementAmount={decrementAmount} />
            })
          }

        <h2 className='total'>Total: {total}$</h2>

        <div className="checkout-div">
          <button className='check-out-btn'>Checkout</button>
        </div>

    </div>
  )
}
