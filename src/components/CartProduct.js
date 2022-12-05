import React, { useState } from 'react'

export default function CartProduct({ pId, type, name, price, img, amount, incrementAmount, decrementAmount }) {

  const [value, setValue] = useState(amount);

  const increaseAmount = () => {
    setValue(prev => prev += 1);
    incrementAmount(pId);
  }

  const decreaseAmount = () => {
    setValue(prev => prev -= 1);
    decrementAmount(pId);
  }

  return (
    <div className='cart-product'>
        <img src={img} alt="" />
        <div className="product-info">
            <div className="product-price">
              <p>{type}</p>
              <p>{price}$</p>
            </div>
            <div className="product-description">
                <p>{name}</p>
              </div>
            <form className="product-amount">
              <button className='product-amount-btn' onClick={(e) => {
                e.preventDefault();
                decreaseAmount();
              }}>-</button>
              <input type="number" className='product-amount-input'
                style={{
                  textAlign: 'center'
                }} 
                min={0}
                readOnly
                value={value}/>
              <button className='product-amount-btn' onClick={(e) => {
                e.preventDefault();
                increaseAmount();
              }}>+</button>
            </form>
        </div>
    </div>
  )
}
