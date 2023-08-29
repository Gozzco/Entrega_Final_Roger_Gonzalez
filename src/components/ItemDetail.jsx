import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { Card, CardBody, CardFooter, Stack, Heading, Divider, Image, Text, Center } from '@chakra-ui/react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const ItemDetail = ({ products }) => {
  const { id } = useParams();
  const { addToCart } = useShoppingCart ();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (

    <Center>
      
      <Card className='cardDetail' maxW='lg'>
      <CardBody borderRadius='0' bg='white'>

        <Image className='ImageCardDetail' src = {product.src} alt= {product.name} borderRadius='18px' />

        <Stack bg='white' mt='4' spacing='2'>
          <Heading bg='white' fontFamily='"Raleway", sans-serif' fontSize='50px' fontWeight='bolder' marginTop='40px'>{product.name}</Heading>
          <Text bg='white' marginTop='20px'>{product.description}</Text>
          <Text bg='white' marginTop='10px' className='textPrice'>${product.price}</Text>
        </Stack>

      </CardBody>

        <Divider />
        <CardFooter bg='#333' className='cardFooter'>
          <ItemCount initial={0} stock={product.stock} productObject={product}/>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default ItemDetail;

