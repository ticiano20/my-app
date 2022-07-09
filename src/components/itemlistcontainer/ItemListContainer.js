import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router";
import Spinner from "../spinner/spinner";

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const filterProducts = products.filter(function productosFiltrados(cat) {
    if (cat.category === categoryId) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterProducts);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProductos(res.data))
      .then(setLoading(false));
    console.log(products);
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/2${categoryId}`)
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
