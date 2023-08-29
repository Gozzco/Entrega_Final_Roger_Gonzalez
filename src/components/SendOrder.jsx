import { Button, Link } from '@chakra-ui/react'
import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';

const SendOrder= () => {
  const { cartItems } = useShoppingCart();

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.product.price * item.quantity;
    }
    return total;
  };

  return (
    <div>
      <p></p>
      <Button marginTop='80px' fontFamily='"Raleway", sans-serif' bg='rgb(250, 165, 9)' fontSize='20px' color='gray.700' borderRadius='0' padding='1.5'>
        <Link to={'/contact'}>
          Finalizar la compra - Total: ${calculateTotal()}
        </Link>
      </Button>
    </div>
  )
}

export default SendOrder;
