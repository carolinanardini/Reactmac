import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css';
import {useParams, NavLink, Link} from 'react-router-dom'; 
import {useState, useEffect, useContext } from 'react';
import CartContext from '../../store/CartContext.js';
import ItemButton from '../ItemButton/ItemButton'


function ItemDetail(props) {
 
  return (
    <>
      {props.detail.length !==0 && 
      
      <div className='flexdetail'>
        <section className='recuadro'>
              
          
          <img className='imagen' src={props.detail[0].img}/>
            
        </section>
      

        <section className='derecha'>
          <p className='bold large'>{props.detail[0].nombre}</p>
          
          <p className='italic'> {props.detail[0].descripcion1}</p>
          <p className='italic'> {props.detail[0].descripcion2}</p>
          <p className='italic'> {props.detail[0].descripcion3}</p>
          <p className='italic'> {props.detail[0].descripcion4}</p>

          <ItemButton stock={props.detail[0].stock} item={props.detail[0]}/>
          
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