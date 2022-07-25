import {React, createContext, useState, useEffect} from 'react';


const CartContext = createContext({})

const {Provider} =CartContext


export const CartProvider = ({defaultValue=[],children}) =>{

    const [cart, setCart] =useState(defaultValue);

    const clearCart =() => {
        setCart ([]);
    }

    useEffect(()=>{console.log(cart)},[cart]);

    const showCart=()=>{
       

      return cart.map(({item, quantity}) =>

        <section className='card' key={item.id}>
        <div className='centrado'>
        <p className='titulo'>titulo: {item.nombre}</p>
        <p>{item.img}</p>
        <p>${item.precio}</p>
       
        <button className='button'>Actualizar carrito</button>
        <button className='button'>Eliminar del carrito</button>
        </div>
     </section>

     )


    }

    const addItem =(item,quantity) => {

        if(isInCart(item.id)){
            const newCart = [...cart]
            for(const element of newCart){
                if(element.item.id===item.id)
                element.quantity=element.quantity+quantity;
            }
            setCart(newCart);

        } else{

        setCart(
            [
                ...cart,
                {
                    item:item,
                    quantity:quantity
                }
            ]
        )
         }
    }

    const isInCart = (id) =>{
        return cart.find((element)=>element.item.id===id);
    }


    const removeFomCart =(id) => {
        const newCart = [...cart].filter(element =>element.item.id!==id);
        setCart(newCart);
    }


    const context = {
        cart,
        clearCart,
        addItem,
        removeFomCart,
        showCart
    }

    return(
        <Provider value ={context}>
            {children}
        </Provider>
    )

}

export default CartContext;