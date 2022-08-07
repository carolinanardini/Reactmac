import CartContext from '../../store/CartContext.js';
import {useState, useEffect, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './Cart.css';

function Cart (){

    const {removeFromCart, clearCart, cart, totalAmount} =useContext(CartContext);

    const [empty, setEmpty]=useState(true);
    const [finalizarCompra, setFinalizarCompra]=useState(false);

    useEffect(() => {
        if (cart.length === 0) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }
      }, [cart.length]);

      

    const showCart=()=>{
       

        return cart.map(({item, quantity}) =>
  
          <>
            <section className='' key={item.id}>
              <div className='cartcard izq'>
                <div className='titleyimg'>
                  <p className='titulo'>{item.nombre}</p>
                  <img className='imagencart' src={item.img}></img>
                </div>

                <div className='textocart'>
                <p>Precio por unidad: ${item.precio}</p>
                <p>cantidad: {quantity}</p>
                </div>

                <div className='flex'>
                  <button className='button'>Actualizar carrito</button>
                  <button className='button' onClick={()=>removeFromCart(item.id)}>Eliminar del carrito</button>
                </div>

              </div>
                
            </section>
          </>
          
          
  
       )
    }

    const checkout =()=>{
      setFinalizarCompra(true)
    }

    return(
        <>
        {showCart()}
        {empty && <p>Tu carrito está vacío</p>}
        <p>Total: ${totalAmount}</p>
     
        <div>
          <button className='button' onClick={clearCart}>Vaciar el carrito</button>
          <button className='button' onClick={checkout}>Finalizar compra</button>
        </div>

        {finalizarCompra && <ExpenseForm/>}
        </>
    );

}


export default Cart