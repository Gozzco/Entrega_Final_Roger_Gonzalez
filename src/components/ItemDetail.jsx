import React from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const ItemDetail = () => {

  const {id} = useParams ()

  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail