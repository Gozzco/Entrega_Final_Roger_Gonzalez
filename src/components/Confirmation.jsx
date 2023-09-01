import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = (orderId) => {
  return (
    <div className='cartList'>
      <h1 className='confirmationBuy'>¡Compra Exitosa!</h1>
        <div>
        <ul><Link to={'/'}><i className="check fa-solid fa-circle-check"></i></Link></ul>
        </div>
      <p className='cartRedirect'>Gracias por tu compra. En breve te contactaremos para finalizar el proceso.</p>
    </div>
  );
};

export default Confirmation;
