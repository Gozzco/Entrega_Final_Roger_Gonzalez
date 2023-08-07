import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>

        <img className='logo' src="./public/needologoposi.png" alt="logo de Needo" />

        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>

        <CartWidget/>

    </div>
  )
}

export default NavBar