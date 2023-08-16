import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (

    <div className='nav'>

            <Link className='logo' to={'/'}><img className='logoImg' src="/public/needologoposi.png" alt="logo de Needo" /></Link>

        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Menu className='menuList'>
                  <MenuButton bg='rgb(250, 165, 9)' fontSize='sm' color='gray.700' borderRadius='0' padding='1.5' as={Button} rightIcon={<ChevronDownIcon bg='rgb(250, 165, 9)'/>}>
                    <p className='menuList'>Productos</p>
                  </MenuButton >

                  <MenuList  bg='rgb(250, 165, 9)' fontSize='sm' borderRadius='0' color='gray.700'>
                    <MenuItem bg='rgb(250, 165, 9)'><Link to={'/category/madera'}><p className='menuList'>Sillas de madera</p></Link></MenuItem>
                    <MenuItem bg='rgb(250, 165, 9)'><Link to={'/category/textiles'}><p className='menuList'>Sillas de tela</p></Link></MenuItem>
                    <MenuItem bg='rgb(250, 165, 9)'><Link to={'/category/metal'}><p className='menuList'>Sillas de metal</p></Link></MenuItem>
                    <MenuItem bg='rgb(250, 165, 9)'><Link to={'/category/all'}><p className='menuList'>Ver todo</p></Link></MenuItem>
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