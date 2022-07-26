import './ItemList.css';
import Item from '../Item/Item.js';


function ItemList(props) {
  

  return (
    <div>
    

        <div className='catalogo'>
            {props.info.map(i=> <Item item={i} key={i.id} id={i.id} product={i.nombre} price={i.precio} image={i.img} stock={i.stock}/>)}
        </div>


    </div>
  );
}


  export default ItemList;