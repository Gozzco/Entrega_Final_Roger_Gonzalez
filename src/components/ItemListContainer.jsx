import React from 'react'
import { useParams } from 'react-router-dom'
import {Center} from '@chakra-ui/react'
import ItemList from './ItemList'


const ItemListContainer = () => {

    const {category} = useParams ()

    const products  = [

        { id:1, name:"Silla Falcon", category:"Madera", price:12000, stock:1, description:"Silla de madera", src:"./public/needoarticulosilla1.jpg"},
        { id:3, name:"Silla Barinas", category:"Metal", price:13600, stock:1, description:"Silla de metal", src:"./public/needoarticulosilla3.jpg"},
        { id:4, name:"Silla Aragua", category:"Madera", price:15400, stock:1, description:"Silla de madera", src:"./public/needoarticulosilla4.jpg"},
        { id:5, name:"Silla Lara", category:"Metal", price:13599, stock:1, description:"Silla de Metal", src:"./public/needoarticulosilla5.jpg"},
        { id:6, name:"Silla BKF", category:"Metal", price:35000, stock:1, description:"Silla de metal", src:"./public/needoarticulosilla6.jpg"},
        { id:7, name:"Silla Eames", category:"Metal", price:13999, stock:1, description:"Silla de metal", src:"./public/needoarticulosilla7.jpg"},
        { id:8, name:"Silla Sucre", category:"Madera", price:14750, stock:1, description:"Silla de madera", src:"./public/needoarticulosilla8.jpg"},
        { id:9, name:"Silla Merida", category:"Madera", price:17800, stock:1, description:"Silla de madera", src:"./public/needoarticulosilla9.jpg"},
        { id:10, name:"Silla Tachira", category:"Madera", price:13450, stock:1, description:"Silla de madera", src:"./public/needoarticulosilla10.jpg"},
        { id:11, name:"Silla Caracas", category:"Madera", price:19500, stock:1, description:"Silla de madera", src:"./public/needoarticulosilla11.jpg"},
        { id:12, name:"Silla Esparta", category:"Textiles", price:14900, stock:1, description:"Silla de tela", src:"./public/eedoarticulosilla12.jpg"},
        { id:13, name:"Silla Guyana", category:"Madera", price:21500, stock:1, description:"Silla de madera", src:"./public/needoarticulosilla13.jpeg"},
        { id:14, name:"Silla Cristobal", category:"Textiles", price:19500, stock:1, description:"Silla de tela", src:"./public/needoarticulosilla14.jpg"},
        { id:15, name:"Silla Monagas", category:"Textiles", price:26500, stock:1, description:"Silla de tela", src:"./public/needoarticulosilla15.jpg"},
        { id:2, name:"Silla Zulia", category:"Madera", price:11300, stock:1, description:"Silla de madera", src:"./public/needoarticulosilla2.jpg"},
    
      ]

    const getProducts = new Promise ((resolve, reject) => {

      if (products.length > 0) {

        setTimeout(() => {

          resolve(products)

        },2500)

      } else {

        reject(new Error ("No hay productos para mostrar en este momento"))

      }

    })



    getProducts
      .then((res) => {
        
      })
      .catch ((error) => {
        console.log(error)
    })

  const filteredProducts = products.filter ((product) => product.category === category)

  return (
    <Center>

      <ItemList products = {filteredProducts}/>
      
    </Center>
  )

}



export default ItemListContainer