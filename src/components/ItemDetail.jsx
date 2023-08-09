import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CardFooter, CardHeader, Heading, Text, Center, CardBody } from '@chakra-ui/react';

const ItemDetail = ({products}) => {

  const { id } = useParams ();

  const filteredProducts = products.filter((prod) => prod.id === id)

  return (

    <div>
      {filteredProducts.map((p) => {

        return (
          <div key={p.id}>
            <Center>

              <Card>

                <CardHeader>
                    <Heading>{p.name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{p.description}</Text>
                    <Text>{p.category}</Text>
                </CardBody>
                <CardFooter>
                    <ItemCount />
                </CardFooter>

              </Card>
              
            </Center>

          </div>

        )

      })
        
      }
    </div>
  )
}

export default ItemDetail