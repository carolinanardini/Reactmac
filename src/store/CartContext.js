import {React, createContext, useState, useEffect} from 'react';

const CartContext = createContext({})

const {Provider} =CartContext


export const CartProvider = ({defaultValue=[],children}) =>{

    const [cart, setCart] =useState(defaultValue);

    const clearCart =() => {
        setCart ([]);
    }

    useEffect(()=>{console.log(cart)},[cart]);

    const addItem =(item,quantity) => {
        console.log(item);

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
        removeFomCart
    }

    return(
        <Provider value ={context}>
            {children}
        </Provider>
    )

}

export default CartContext;