import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ItemDetail from "../itemdetail/ItemDetail";
import Spinner from "../spinner/spinner";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/1/products/${itemId}`)
      .then((res) => setDetail(res.data))
      .then(setLoading(false));
  }, [itemId]);

  console.log(detail);

  return <div>{loading ? <Spinner /> : <ItemDetail detail={detail} />}</div>;
};

export default ItemDetailContainer;
