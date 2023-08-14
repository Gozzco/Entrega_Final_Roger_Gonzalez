import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Stack, Heading, Divider, Button, Image, Text } from '@chakra-ui/react'


const item = ({ product }) => {


  return (

      <Card className='card' maxW='sm'>
    <CardBody>

      <Image className='imageCard' src = {product.src} alt= {product.name} borderRadius='15px' />

      <Stack mt='4' spacing='2'>
        <Heading size='md'>{product.name}</Heading>
        <Text>{product.description}</Text>
        <Text className='textPrice'>${product.price}</Text>
      </Stack>

    </CardBody>

    <Divider />

    <CardFooter className='contBuyButton'>

        <Button variant='solid' colorScheme='#faa509;'>
        <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </Button>

    </CardFooter>

  </Card>

  );

}

export default item
