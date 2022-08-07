import ItemCount from '../ItemCount/ItemCount.js';
import { useParams, NavLink, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import CartContext from '../../store/CartContext.js';

function ItemButton(props) {

    const [terminarCompra, setTerminarCompra] = useState(false)

    const [num, setNum] = useState(0);

    const amountHandler =(newAmount) =>{
  
      setNum(newAmount);
    }

    const { addItem } = useContext(CartContext);

    const onAdd = () => {
        setTerminarCompra(true)
        addItem(props.item, num);
    }


    return (
        <>

            <ItemCount amount={amountHandler} />
            <button onClick={onAdd} className='button'>
                <a className=''>Agregar al carrito</a></button>
            {terminarCompra && <button className='button'> <NavLink to='/cart'>Terminar mi compra</NavLink></button>}


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


export default ItemButton;