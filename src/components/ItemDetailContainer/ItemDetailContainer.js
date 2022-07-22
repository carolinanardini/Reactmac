import ItemDetail from '../ItemDetail/ItemDetail.js';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom'; 

import { useEffect, useState } from 'react';


function ItemDetailContainer() {

  const params =useParams()
  const [detailFetch, setDetailFetch]=useState([])
 

  const fetchDetail =() => {
    fetch('/data.json')
    .then((response)=>response.json())
    .then((data)=> {setDetailFetch(data.filter(($data)=>$data.id===Number(params.id)))
    })
  }


  useEffect(() => {
    fetchDetail()
  }, [])

  return (
    
    <div className="">
    
        <ItemDetail detail ={detailFetch}/>
     

    </div>

  );
}

export default ItemDetailContainer;