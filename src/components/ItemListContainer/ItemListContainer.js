import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc } from 'firebase/firestore';


function ItemListContainer() {
  const params = useParams();

  const [info, setInfo] =useState([])
  const [newProduct, setNewProduct] =useState([])

  /* AGREGAR PRODUCTO A FIREBASE DESDE DATA.JSON */

/*   const newProducts =()=>{
    fetch('data.json')
    .then((response)=> response.json())
    .then((data) => setNewProduct(data))
    
  
    const db =getFirestore();
    const productCollection = collection (db, "productos")

    newProduct.forEach((product)=>{
      addDoc(productCollection, product)
    })

  } */

  useEffect(() => {
    const db = getFirestore();

    let prod
    if (params.idCategoria) {
      prod = query(collection(db, "productos"), where('categoryId', "==", params.idCategoria))
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