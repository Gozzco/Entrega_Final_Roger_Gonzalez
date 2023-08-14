import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {Menu, MenuList, MenuButton, MenuItem, } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <div className='nav'>

        <img className='logo' src="/public/needologoposi.png" alt="logo de Needo" />

        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/category/all'}>Productos</Link></li>
            <li><Link to={'/contact'}>Contacto</Link></li>
            <li><Link to={'/about'}>Quiénes Somos?</Link></li>
        </ul>

        <CartWidget/>

    </div>
  )
}

export default NavBar