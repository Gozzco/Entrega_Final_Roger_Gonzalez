import { Spinner } from '@chakra-ui/react';
import React from 'react';


const Loader = () => {
  return (

    <Spinner className='loader'
  thickness='4px'
  speed='0.95s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>

  )
}

export default Loader