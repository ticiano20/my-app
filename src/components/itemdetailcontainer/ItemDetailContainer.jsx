import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../async/asyncMock";
import { ItemDetail } from "../itemdetail/ItemDetail";
import { Link } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    let {id}= useParams();
    

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setItem(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [])

    console.log("item:", item)

    return (
        <div>
            <Link Link to="/item.id">
            <h1>Detalle del producto:</h1>
            <hr></hr>
            
            {loading ? <div>Cargando...</div>
                : <ItemDetail img={item.img} name={item.name} description={item.description} key={item.id} />
                
            }
           
            </Link>
        </div>
    )
}