import React from 'react';
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext';

const CartWidget = () => {
  const { cartItems } = useShoppingCart();

  const cartTotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='cartContainer'>
      <ul className='linkCart'><Link to={'/cart'}><i className="fa-sharp fa-solid fa-cart-shopping"></i></Link></ul>
      <span className='cartWidget'>{cartTotalItems}</span>
    </div>
  );
};

export default CartWidget;
