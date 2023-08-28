import React from 'react'
import { useParams } from 'react-router-dom'
import {Center} from '@chakra-ui/react'
import ItemList from './ItemList'
import Loader from './Loader';



const ItemListContainer = () => {

    const {category} = useParams ()

    const products  = [

      { id:1, name:"Silla Falcon", category:"textiles", price:12000, stock:12, src:"/public/needoarticulosilla1.jpg"},

      { id:3, name:"Silla Barinas", category:"madera", price:13600, stock:10, src:"/public/needoarticulosilla3.jpg"},
  
      { id:4, name:"Silla Aragua", category:"madera", price:15400, stock:13, src:"/public/needoarticulosilla4.jpg"},
  
      { id:5, name:"Silla Lara", category:"metal", price:13599, stock:15, src:"/public/needoarticulosilla5.jpg"},
  
      { id:6, name:"Silla BKF", category:"metal", price:35000, stock:5, src:"/public/needoarticulosilla6.jpg"},
      
      { id:7, name:"Silla Eames", category:"madera", price:13999, stock:3, src:"/public/needoarticulosilla7.jpg"},
  
      { id:8, name:"Silla Sucre", category:"madera", price:14750, stock:5, src:"/public/needoarticulosilla8.jpg"},
  
      { id:9, name:"Silla Merida", category:"textiles", price:17800, stock:8, src:"/public/needoarticulosilla9.jpg"},
  
      { id:10, name:"Silla Tachira", category:"textiles", price:13450, stock:11, src:"/public/needoarticulosilla10.jpg"},
  
      { id:11, name:"Silla Caracas", category:"madera", price:19500, stock:2, src:"/public/needoarticulosilla11.jpg"},
  
      { id:12, name:"Silla Esparta", category:"metal", price:14900, stock:9, src:"/public/needoarticulosilla12.jpg"},
  
      { id:13, name:"Silla Guyana", category:"madera", price:21500, stock:12, src:"/public/needoarticulosilla13.jpeg"},
  
      { id:14, name:"Silla Cristobal", category:"textiles", price:19500, stock:15, src:"/public/needoarticulosilla14.jpg"},
  
      { id:15, name:"Silla Monagas", category:"textiles", price:26500, stock:16, src:"/public/needoarticulosilla15.jpg"},
  
      { id:2, name:"Silla Zulia", category:"textiles", price:11300, stock:12, src:"/public/needoarticulosilla2.jpg"},
    
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


    let filteredProducts = products;
    
    if (category && category !== 'all') {

      filteredProducts = products.filter(product => product.category === category);
      
    }  

    return (
      <Center>

        <ItemList products = {filteredProducts}/>

      </Center>
  )

}



export default ItemListContainer