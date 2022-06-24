import React from "react";
import { useEffect, useState } from "react";
import { getProductById } from "./async/asyncMock";
import ItemCount from "./ItemCount";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const id = 2;

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
        <>
            <h1>Detalle del producto:</h1>
            <hr></hr>
            {loading ? <div>Cargando...</div>
                : <ItemDetail img={item.img} name={item.name} description={item.description} />
                
            }
            
            
        </>
    )
}