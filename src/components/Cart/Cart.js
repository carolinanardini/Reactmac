import CartContext from '../../store/CartContext.js';
import {useState, useEffect, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';

function Cart (){

    const {showCart} =useContext(CartContext);


    return(
        <>
        {showCart()}
    
    
    
        </>
    );

}


export default Cart