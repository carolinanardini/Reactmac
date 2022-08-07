import logo1 from '../assets/logo1.png';
import naturally from '../assets/naturally.png';

import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function Navbar() {

  return (
    <div className='fondo'>
      
      
      <header className="header">
          <NavLink to='/'><img src={naturally} className="logo"/></NavLink>
          <li> <NavLink activeclassname='active'to='/nosotros'>Nosotros</NavLink></li>
          <li className='columna'> <NavLink activeclassname='active'to='/categorias'>Categorias</NavLink>
            <ul className='categorias'>
           
              <li> <NavLink to="/categorias/barrasdecereales">Barras de cereal</NavLink></li>
              <li> <NavLink to="/categorias/granola">Granola</NavLink></li>
            </ul>
          </li>
          <li> <NavLink activeclassname='active'to='/iniciarsesion'>Iniciar sesión</NavLink></li>
          <li><NavLink to='/cart'> <CartWidget/> </NavLink> </li>
       
      </header>
    </div>
  );
}

export default Navbar;