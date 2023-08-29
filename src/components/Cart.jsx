import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import SendOrder from './SendOrder'

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useShoppingCart();

  return (
    <div className='cartList'>
      {cartItems.length === 0 ? (
        <div className='cartRedirect'>
          <p> Tu carrito está vacío, echa un vistazo a nuestro catálogo! </p>
          <Button className='contBuyButton' borderRadius='0' variant='solid' colorScheme='rgb(250, 165, 9);'>
              <Link className='contBuyButton' to={'/'}>Volver al principio</Link>
          </Button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className='cartListData' key={item.product.id}>
              <img className='imageCart' src={item.product.src} alt={item.product.name} />
              <p className='detailCart'>{item.product.name}</p>
              <p className='detailCart'>Price: ${item.product.price}</p>
              <p className='detailCart'> x {item.quantity}</p>
              <button onClick={() => removeFromCart(item.product.id)}><i className="fa-solid fa-xmark"></i></button>
              <button onClick={clearCart}><i className="fa-solid fa-trash"></i></button>
            </div>
          ))}

          {< SendOrder />}

        </>
      )}
    </div>
  );
};

export default Cart;



