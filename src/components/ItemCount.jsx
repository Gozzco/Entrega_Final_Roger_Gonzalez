import React, { useState } from 'react';
import { HStack, Button, Text, useToast, Box } from '@chakra-ui/react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';


const ItemCount = ({ stock, initial, productObject }) => {
  const [quantity, setQuantity] = useState(initial);
  const toast = useToast();

  return (
    <ShoppingCartContext.Consumer>
      {({ addToCart }) => (
        <HStack spacing={4}>
          <Button
            onClick={() => setQuantity(Math.max(quantity - 1, 0))}
            disabled={quantity <= 0}
          >
            -
          </Button>
          <Text>{quantity}</Text>
          <Button
            onClick={() => setQuantity(Math.min(quantity + 1, stock))}
            disabled={quantity >= stock}
          >
            +
          </Button>
          <Button
            onClick={() => {
              if (quantity > 0) {
                addToCart(productObject, quantity);
                setQuantity(initial);
                toast({
                  position: 'right-bottom',
                  status: 'success',
                  duration: 1500,
                  isClosable: true,
                  render: () => (
                    <Box color='white' p={3} margin='0px' bg='rgb(250, 165, 9)'>
                      Producto agregado al carrito!
                    </Box>
                  ),
                })
              }
            }}
            disabled={quantity <= 0 || quantity > stock}
          >
            Agregar al carrito
          </Button>
        </HStack>
      )}
    </ShoppingCartContext.Consumer>
  );
};

export default ItemCount;
