
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
        console.log('asd')
        event.preventDefault();
    
        const newBuyer={
            name: newTitle,
            phone: newPhone,
            email: newEmail
        }
    
        const order={
            buyer: newBuyer,
            total: totalAmount, 
            items: cart,
            date: Date()
        }
        console.log(order)
        const db = getFirestore();
    
        const ordersCollection = collection(db,"orders")
    
        addDoc(ordersCollection, order).then((doc)=>setNewOrderId(doc.id))
    
      
    }

    return(
        <div className='burbuja'>
            <p>Antes de finalizar, ingresá tus datos</p>

            <form>

                <p>Nombre:</p> <input value={newTitle} onChange={titleHandler}></input>
        
                <p>Teléfono: <input value={newPhone} onChange={phoneHandler}/></p>
                <p>Email: <input value={newEmail} onChange={emailHandler}/> </p>

                <button onClick={submitHandler} className='button'>Enviar</button>

            </form>
            

        </div>
        
    );
    

}


export default ExpenseForm;

