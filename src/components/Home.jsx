import React from 'react'
import { Link } from '@chakra-ui/react'

const Home = () => {
  return (

    <div className='homeContainer'>

      <div className='titleHome'>
        <p>Bienvenido a Needo!</p>
      </div>

      <div className='homeBanner'>
        <img src="public/needobannernosotros.jpg" alt="" />
      </div>

      <div className='imageWithOverlay'>
        <Link to={'/category/all'}> <p className='linkCategory'>Mira nuestros productos</p> </Link>
        <img src="public/needobannerprod.jpg" alt=""/>
      </div>

    </div>
    
  )
}

export default Home