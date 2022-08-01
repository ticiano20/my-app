import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router";

import Spinner from "../spinner/spinner";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../firebase/firebaseconfig';
const ItemListContainer = () => {
  // const [products, setProductos] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getAutos = async () => {
  const q = query(collection, (db, "autos"));
  const querySnapshot = await getDocs(q);
  const docs =[];
  querySnapshot.forEach((doc) => {
    docs.push({...doc.data(), id:doc.id});
    setData(docs);
  });
  };

  useEffect(() =>{
    getAutos();
  },[]);
  
  // const { categoryId } = useParams();

  // const filterProducts = products.filter(function productosFiltrados(cat) {
  //   if (cat.category === categoryId) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // console.log(filterProducts);
/* PABLO KRECIK
  useEffect(() => {
    const querydb=getFirestore();

    const queryCollection= collection (querydb, 'autos'); 

    if (categoryId){
    const q  = query(queryCollection, where('catgory','==','categoryId'));
    getDocs(q)
       .then(res => setData(res.docs.map(autos =>({id:autos.id, ...autos.data()}))));}
       else{
       getDocs(queryColletction)
       .then(res => setData(res.docs.map(autos =>({id:autos.id, ...autos.data()}))));
    
    }
  },[categoryId])*/

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>ItemListContainer</h1>
          <ItemList
            // products={products}
            // categories={filterProducts}
            // filterProducts={filterProducts}
          />{" "}
        </div>
      )}
    </div>
  );
}


export default ItemListContainer;
