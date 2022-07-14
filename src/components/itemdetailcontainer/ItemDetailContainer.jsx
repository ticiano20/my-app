import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ItemDetail from "../itemdetail/ItemDetail";
import Spinner from "../spinner/spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc= doc(querydb, 'autos', 'BTw4jVWppZa4b1gDNiqD');
    getDoc(queryDoc)
      .then(res=> console.log({id:res.id,...res.data()}));
  }, []);

  console.log(detail);

  return <div>{loading ? <Spinner /> : <ItemDetail detail={detail} />}</div>;
};

export default ItemDetailContainer;
