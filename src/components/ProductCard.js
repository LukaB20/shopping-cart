import React, { useState } from 'react'
import amd from '../assets/amd-ryzen-7.PNG'

export default function ProductCard({ pId, img, name, price, addToCart }) {

  return (
    <div className='product-card'>

        <img src={img} alt="" />

        <h3>{name}</h3>

        <p>{price}$</p>

        <button onClick={() => {
          addToCart(pId);
        }}>Add to cart</button>

    </div>
  )
}
