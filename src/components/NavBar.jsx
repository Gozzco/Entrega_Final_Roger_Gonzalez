import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (

    <div className='nav'>

        <img className='logo' src="/public/needologoposi.png" alt="logo de Needo" />

        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li className='menu'><Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Productos
                  </MenuButton>

                  <MenuList className='menuList'>
                    <MenuItem><Link to={'/category/madera'}>Sillas de madera</Link></MenuItem>
                    <MenuItem><Link to={'/category/textiles'}>Sillas de tela</Link></MenuItem>
                    <MenuItem><Link to={'/category/metal'}>Sillas de metal</Link></MenuItem>
                    <MenuItem><Link to={'/tipo/silla'}>Ver todo</Link></MenuItem>
                  </MenuList>
              </Menu>
            </li>
            <li><Link to={'/contact'}>Contacto</Link></li>
            <li><Link to={'/about'}>Conocenos</Link></li>
        </ul>

        <CartWidget/>

    </div>
  )
}

export default NavBar