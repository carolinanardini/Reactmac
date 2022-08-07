import ItemDetail from '../ItemDetail/ItemDetail.js';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom'; 
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';


function ItemDetailContainer() {

  const params =useParams()
  const [detailFetch, setDetailFetch]=useState([])
  const [isLoading, setIsLoading]=useState(false)
 


  useEffect(() => {
    setIsLoading(true)

    const db = getFirestore();
 
    let detalle = query(collection(db, "productos"), where('id', "==", Number(params.id)))

    getDocs(detalle).then((snapshot) => {
      

      setDetailFetch(snapshot.docs.map((doc) => doc.data()))
      setIsLoading(false)
    })
    

  }, [params.id])



  // const fetchDetail =() => {
  //   fetch('/data.json')
  //   .then((response)=>response.json())
  //   .then((data)=> {setDetailFetch(data.filter(($data)=>$data.id===Number(params.id)))
  //   })
  // }


  // useEffect(() => {
  //   fetchDetail()
  // }, [])

  return (
    
    <div className="">

      {isLoading && <p className='loading'>Cargando...</p>}
    
        <ItemDetail detail ={detailFetch}/>
     

    </div>

  );
}

export default ItemDetailContainer;