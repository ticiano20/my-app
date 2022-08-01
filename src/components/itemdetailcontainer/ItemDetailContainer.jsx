import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ItemDetail from "../itemdetail/ItemDetail";
import Spinner from "../spinner/spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  // const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { detailId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc= doc(querydb, 'autos', 'detailId');
    getDoc(queryDoc)
      .then(res=> setData({id:res.id,...res.data()}));
  }, [detailId]);


  return <div>{loading ? <Spinner /> : <ItemDetail data={data} />}</div>;
};

export default ItemDetailContainer;
