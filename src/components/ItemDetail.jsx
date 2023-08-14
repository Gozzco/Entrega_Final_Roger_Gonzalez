import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CardFooter, CardHeader, Heading, Text, Center, CardBody } from '@chakra-ui/react';

const ItemDetail = ({initialProducts}) => {

    console.log(initialProducts)

    return(

      <div>

        <h1>Item Detail</h1>
        {

          initialProducts.map((product)=> (

            <div key={product.id}>

                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.stock}</p>

            </div>

          ))

        }

      </div>

    )




  /*const { id } = useParams ();

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
  )*/
}

export default ItemDetail