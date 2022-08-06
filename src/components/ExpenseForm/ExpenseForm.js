
import CartContext from '../../store/CartContext.js';
import {useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import './ExpenseForm.css';

const ExpenseForm=()=>{

    const {totalAmount, cart} =useContext(CartContext);

    const [newTitle, setNewTitle] =useState("")
    const [newPhone, setNewPhone] =useState("")
    const [newEmail, setNewEmail] =useState("")
    const [newDate, setNewDate] =useState("")
    const [newOrderId, setNewOrderId] =useState("")

    const titleHandler = (event) => {
        setNewTitle(event.target.value)
    }
    
    const phoneHandler = (event) => {
        setNewPhone(event.target.value)
    }
    
    const dateHandler = (event) => {
        setNewDate(event.target.value)
    }
    
    const emailHandler = (event) => {
        setNewEmail(event.target.value)
    }
    
    
    const submitHandler = (event) =>{
        event.preventDefault();
    
        const newBuyer={
            name: newTitle,
            phone: newPhone,
            email: new Date(newDate)
        }
    
        const order={
            buyer: newBuyer,
            total: totalAmount, 
            items: cart,
            date: Date()
        }

        const db = getFirestore();
    
        const ordersCollection = collection(db,"orders")
    
        addDoc(ordersCollection, order).then((doc)=>setNewOrderId(doc.id))
    
      
    }
    console.log(newTitle)
    return(
        <div className='burbuja'>
            <p>Antes de finalizar, ingresá tus datos</p>

            <form>

                <p>Nombre: <input onChange={titleHandler} {...newTitle}/></p>
        
                <p>Teléfono: <input onChange={phoneHandler} {...newPhone}/></p>
                <p>Email: <input onChange={emailHandler} {...newEmail}/> </p>

                <button className='button'>Enviar</button>

            </form>
            

        </div>
        
    );
    

}


export default ExpenseForm;

