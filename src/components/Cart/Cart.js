import CartContext from '../../store/CartContext.js';
import {useState, useEffect, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';

function Cart (){

    const {showCart} =useContext(CartContext);
    const {clearCart} =useContext(CartContext);


    return(
        <>
        {showCart()}
        <button className='button' onClick={clearCart}>Vaciar el carrito</button>
        </>
    );

}


export default Cart