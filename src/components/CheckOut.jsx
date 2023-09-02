
import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Box, useToast } from '@chakra-ui/react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Confirmation from './Confirmation';
import { Link } from 'react-router-dom';


const CheckOut = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [address, setAddress] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false)

  const { cartItems, clearCart } = useShoppingCart()

  const toast = useToast()
  const db = getFirestore()

  const handleEmailConfirmation = () => {
    if (email === confirmEmail) {
      setIsEmailConfirmed(true)
    } else {
      setIsEmailConfirmed(false)
      toast({
        position: 'center-bottom',
        status: 'error',
        duration: 3000,
        isClosable: true,
        render: () => (
          <Box color='white' fontSize='md' p={10} margin='0px' bg='red.500'>
            ✖ Las direcciones de correo electrónico no coinciden
          </Box>
        ),
      })
    }
  }

  const handleCheckout = async (e) => {

    e.preventDefault()

    if (isEmailConfirmed && cartItems.length > 0) {
      try { 

        const orderItems = cartItems.map((item) => ({
          productId: item.product.name,
          quantity: item.quantity,
        }))
  
        const order = {
          name,
          email,
          address,
          items: orderItems,
        }
  
        const docRef = await addDoc(ordersCollection, order)
        
        setOrderId(docRef.id);
        clearCart();

        
        
      } catch (error) {
        toast({
          position: 'center-bottom',
          status: 'error',
          duration: 3000,
          isClosable: true,
          render: () => (
            <Box color='gray.700' fontSize='md' fontWeight='bold' p={15} margin='0px' bg='rgb(250, 165, 9)'>
              Error al enviar el formulario
            </Box>
          ),
        })

      }

    } else if (cartItems.length === 0) {
      toast({
        position: 'right-bottom',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        render: () => (
          <Box color='gray.700' fontSize='md' fontWeight='bold' p={15} margin='0px' bg='rgb(250, 165, 9)'>
            Debes agregar artículos al carrito para poder hacer la orden
          </Box>
        ),
      })

    } else {
      toast({
        position: 'center-bottom',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        render: () => (
          <Box color='gray.700' fontSize='md' fontWeight='bold' p={15} margin='0px' bg='rgb(250, 165, 9)'>
            Por favor verifica que las direcciones de correo electrónico coincidan
          </Box>
        ),
      })

    }
  }

  const ordersCollection = collection(db, 'orders')

  const isFormValid = name && email && confirmEmail && isEmailConfirmed && address && cartItems.length > 0

  return (
    <div className='checkoutForm'>
      <h1 className='checkOutTitle'>Check Out</h1>
      <h2 className='checkOutSubTitle'>Completa los datos para generar tu orden de compra</h2>

      <div className='formData'>
        <FormControl>
          <FormLabel>Nombre y Apellido:</FormLabel>
          <Input bg='white' width='800px' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input bg='white' width='800px' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Confirmar Email:</FormLabel>
          <Input bg='white' width='800px' type='email' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} onBlur={handleEmailConfirmation} />
        </FormControl>

        <FormControl>
          <FormLabel>Dirección (calle, altura y ciudad):</FormLabel>
          <Input bg='white' width='800px' type='address' value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
      </div>

      <Button marginTop='80px' fontFamily='"Raleway", sans-serif' bg='rgb(250, 165, 9)' fontSize='20px' color='gray.700' borderRadius='0' padding='1.5' onClick={handleCheckout} disabled={!isFormValid}>
          <Link to='/confirmation'>
          Enviar orden de compra
          </Link>
      </Button>

    </div>
  )
}

export default CheckOut


