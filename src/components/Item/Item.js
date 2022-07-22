import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import {Link} from 'react-router-dom';


function Item(props) {



  return (
    <div>
      <section className='card'>
        <div className='centrado'>
          <p className='titulo'>{props.product}</p>
          <p>{props.image}</p>
          <p>${props.price}</p>
          
          <ItemCount amount={()=>{}}/>
          <button className='button'>Agregar al carrito</button>
          <Link to={`/item/${props.id}`}><button className='button'>Ver detalle</button></Link>
        </div>
      </section>

    </div>
  );
}

export default Item;

