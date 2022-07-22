import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ItemListContainer() {
  const params = useParams();

  const [info, setInfo] =useState([])

  useEffect(()=>{
    setTimeout(() => {
      fetch('/data.json') //Trae el responde completo
      .then((resp)=>resp.json()) //Extrae la informacion a utilizar
      .then((data)=>{
      if(params.idCategoria) {
        setInfo(data.filter(i=>i.categoryId===params.idCategoria))}
        else{
        setInfo(data)}
      })
      // setInfo(data.filter(i=>i.categoryId===params.idCategoria || ! params.idCategoria ))) Setea esa info en nuestro state
  
    }, 5);


  },[params.idCategoria])

 

  return (
    
    <div className="">

      <h2>Productos saludables y frescos</h2>
    
        <ItemList info={info}/>
    </div>

  );
}

export default ItemListContainer;