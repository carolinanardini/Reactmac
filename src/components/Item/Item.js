import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import {Link} from 'react-router-dom';
import ItemButton from '../ItemButton/ItemButton';


function Item(props) {

console.log(props.item);

  return (
    <div>
      <section className='card'>
        <div className='centrado'>
          <p className='titulo'>{props.product}</p>
          <p>{props.image}</p>
          <p>${props.price}</p>
          
          <ItemButton item = {props.item}/>

          <Link to={`/item/${props.id}`}><button className='button'>Ver detalle</button></Link>
        </div>
      </section>

    </div>
  );
}

export default Item;

