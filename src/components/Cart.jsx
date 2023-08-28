import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import SendOrder from './SendOrder'

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useShoppingCart();

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <p> Tu carrito está vacío, echa un vistazo a nuestro catálogo! </p>
          <Button className='contBuyButton' borderRadius='0' variant='solid' colorScheme='rgb(250, 165, 9);'>
              <Link className='contBuyButton' to={'/'}>Volver al principio</Link>
          </Button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.product.id}>
              <img src={item.product.src} alt={item.product.name} />
              <p>{item.product.name}</p>
              <p>Price: ${item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.product.id)}>Eliminar articulo</button>
              <button onClick={clearCart}>Borrar Carrito</button>
            </div>
          ))}

          {< SendOrder />}

        </>
      )}
    </div>
  );
};

export default Cart;



