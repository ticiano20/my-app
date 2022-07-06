import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router";
import Spinner from "../spinner/spinner";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const filterProducts = productos.filter(function productosFiltrados(cat) {
    if (cat.category === categoryId) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterProducts);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductos(res.data))
      .then(setLoading(false));
    console.log(productos);
  }, []);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${categoryId}`)
      .then((res) => setCategories(res))
      .then(setLoading(false));
    console.log(categories);
  }, [categoryId]);
  console.log(categories);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>ItemListContainer</h1>
          <ItemList
            productos={productos}
            categories={filterProducts}
            filterProducts={filterProducts}
          />{" "}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
