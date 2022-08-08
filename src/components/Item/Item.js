import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import {Link} from 'react-router-dom';
import ItemButton from '../ItemButton/ItemButton';


function Item(props) {



  return (
    <div>
      <section className='card'>
        <div className='centrado'>
          <p className='titulo'>{props.product}</p>
          <div className='imgbox'>
          <img className='image' src={props.image}/>
          </div>
          <p className='precio'>${props.price}</p>
          <p>stock: {props.stock}</p>
          
          <ItemButton stock={props.stock} item = {props.item}/>

          <Link to={`/item/${props.id}`}><button className=''>Ver detalle</button></Link>
        </div>
      </section>

    </div>
  );
}

export default Item;

