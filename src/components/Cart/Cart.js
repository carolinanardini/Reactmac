import CartContext from '../../store/CartContext.js';
import {useState, useEffect, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

function Cart (){

    const {removeFromCart, clearCart, cart} =useContext(CartContext);

    const [empty, setEmpty]=useState(true);

    useEffect(() => {
        if (cart.length === 0) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }
      }, [cart.length]);

      

    const showCart=()=>{
       

        return cart.map(({item, quantity}) =>
  
          <section className='card' key={item.id}>
              <div className='centrado'>
              <p className='titulo'>{item.nombre}</p>
              <p>{item.img}</p>
              <p>${item.precio}</p>
              <p>cantidad: {quantity}</p>
          
              <button className='button'>Actualizar carrito</button>
              <button className='button' onClick={()=>removeFromCart(item.id)}>Eliminar del carrito</button>
              </div>
              
          </section>
  
       )
    }

    return(
        <>
        {showCart()}
        {empty && <p>Tu carrito está vacío</p>}
     
      
        <button className='button' onClick={clearCart}>Vaciar el carrito</button>

        <ExpenseForm/>
        </>
    );

}


export default Cart