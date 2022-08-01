import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';


function ItemListContainer() {
  const params = useParams();

  const [info, setInfo] =useState([])

  useEffect(() => {
    const db = getFirestore();

    let prod
    if (params.idCategoria) {
      prod = query(collection(db, "productos"), where('categoria', "==", params.idCategoria))
    } else {
      prod = collection(db, "productos")
    }

    getDocs(prod).then((snapshot) => {

      setInfo(snapshot.docs.map((doc) => doc.data()))
    })

  }, [params.idCategoria])

 

  return (
    
    <div className="">

      <h2>Productos saludables y frescos</h2>
    
        <ItemList info={info}/>
    </div>

  );
}

export default ItemListContainer;