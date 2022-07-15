import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router";
import Spinner from "../spinner/spinner";
import { getFirestore, getDoc, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  // const [products, setProductos] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const { categoryId } = useParams();

  // const filterProducts = products.filter(function productosFiltrados(cat) {
  //   if (cat.category === categoryId) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // console.log(filterProducts);

  useEffect(() => {
    const querydb=getFirestore();
    const queryCollection= collection (querydb, 'autos');
    getDocs(queryCollection)
       .then(res => (res.docs.map(autos =>({id:autos.id, ...autos.data()}))));
    

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>ItemListContainer</h1>
          <ItemList
            products={products}
            categories={filterProducts}
            filterProducts={filterProducts}
          />{" "}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
