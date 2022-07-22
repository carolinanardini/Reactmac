import './ItemList.css';
import Item from '../Item/Item.js';


function ItemList(props) {
  

  return (
    <div>
    

        <div className='catalogo'>
            {props.info.map(i=> <Item key={i.id} id={i.id} product={i.nombre} price={i.precio} />)}
        </div>

        
    

    </div>
  );
}


  export default ItemList;