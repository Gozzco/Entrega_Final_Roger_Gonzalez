import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const item = ({product}) => {

  return (

    <div className='itemCard'>

      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link to={'/item/${product.id}'}>Ver detalle</Link>

    </div>

  );

}

export default item
