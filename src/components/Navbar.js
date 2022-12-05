import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ txtColor, toggleCart }) {

  return (
    <div className='nav'>
        <Link to='/' className="link-white"><p className={`logo ${txtColor}`}>GIGATRON</p></Link>
        <button className={`btn-cart ${txtColor}`}
          onClick={() => {
            toggleCart();
          }}
        ><i className='cart-amount-white'></i><i className="fa-solid fa-cart-shopping"></i></button>
    </div>
  )
}
