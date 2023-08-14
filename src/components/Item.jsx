import React from 'react'
import { Link } from 'react-router-dom'


const item = ({products}) => {

  return (

    <div className='itemCard'>

      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link to={'/item/${product.id}'}>Ver detalle</Link>

    </div>

  );

}

export default item
