import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css';
import {useParams, NavLink, Link} from 'react-router-dom'; 
import {useState, useEffect, useContext } from 'react';
import CartContext from '../../store/CartContext.js';

function ItemDetail(props) {
  
  const [terminarCompra, setTerminarCompra] = useState(false)
  const [desaparecer, setDesaparecer] = useState(true)

  const amountHandler =(newAmount) =>{

    console.log(newAmount);
 
  }

  const addToCart =(count)=>{
    setTerminarCompra(true)
    setDesaparecer(false)
    agregarAlCarrito(props.item,count);
  }

  const {agregarAlCarrito} =useContext(CartContext);

  return (
    <>
      {props.detail.length !==0 && 
      
      <div className='flex'>
      <section className='recuadro'>
            
        <p className='imagen'>{props.detail[0].img}</p>
          
      </section>
    

      <section className='derecha'>
        <p className='bold large'>{props.detail[0].nombre}</p>
        
        <p className='italic'> {props.detail[0].descripcion1}</p>
        <p className='italic'> {props.detail[0].descripcion2}</p>
        <p className='italic'> {props.detail[0].descripcion3}</p>
        <p className='italic'> {props.detail[0].descripcion4}</p>
        {desaparecer && <ItemCount amount={amountHandler}/>}
        <button onClick={addToCart} className='button'><a>Agregar al carrito</a></button>
        {terminarCompra && <button className='button'> <NavLink to='/cart'>Terminar mi compra</NavLink></button> }
        
      </section>

    </div>}
      
     

      
    </>

    // <div className='flex'>
    //   <section className='recuadro'>
            
    //     <p className='imagen'>{props.detail.img}</p>
           
    //   </section>
       


    //   <section className='derecha'>
    //     <p className='bold large'>{props.detail.nombre}</p>
        
    //     <p className='italic'> {props.detail.descripcion1}</p>
    //     <p className='italic'> {props.detail.descripcion2}</p>
    //     <p className='italic'> {props.detail.descripcion3}</p>
    //     <p className='italic'> {props.detail.descripcion4}</p>
    //     <ItemCount/>
    //     <button className='button'>Agregar al carrito</button>
    //   </section>

    // </div>
  );
}


  export default ItemDetail;