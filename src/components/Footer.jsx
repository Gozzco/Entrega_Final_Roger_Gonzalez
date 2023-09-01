import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (

    <div className='footer'>

    <ul>
        <li><Link to={'/contact'}>Contacto</Link></li>
        <li><Link to={'/about'}>Conocenos</Link></li>
    </ul>

    <ul className='footerIcons'>
        <li><Link to={'/'}> <i className="fa-brands fa-instagram"></i> </Link></li>
        <li><Link to={'/'}><i className="fa-brands fa-facebook"></i></Link></li>
        <li><Link to={'/'}><i className="fa-brands fa-twitter"></i></Link></li>
    </ul>

</div>

)}


export default Footer