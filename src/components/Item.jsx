import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Stack, Heading, Divider, Button, Image, Text } from '@chakra-ui/react'


const item = ({ product }) => {


  return (

      <Card className='card' maxW='sm'>
    <CardBody borderRadius='0' bg='white'>

      <Image className='imageCard' src = {product.src} alt= {product.name} borderRadius='18px' />

      <Stack bg='white' mt='4' spacing='2'>
        <Heading bg='white' fontFamily='"Raleway", sans-serif' fontSize='30px' fontWeight='bold'>{product.name}</Heading>
        <Text bg='white'>{product.description}</Text>
        <Text bg='white' className='textPrice'>${product.price}</Text>
      </Stack>

    </CardBody>

    <Divider />

    <CardFooter bg='#333' className='contBuyButton'>

        <Button borderRadius='0' variant='solid' colorScheme='rgb(250, 165, 9);'>
        <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </Button>

    </CardFooter>

  </Card>

  );

}

export default item
