import React from "react";
import { useEffect, useState } from "react";
import { getProductById } from "./async/asyncMock";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const id = 2

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setItems(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [])

    console.log("item:", item)

    return (
        <>
            <br />
            <br /><br /><br />
            <h1>ITEM DETAIL: </h1>
            <hr />
            {loading ? <div>Cargando...</div>
                : <ItemDetail img={item.img} name={item.name} description={item.description} />
            }
        </>
    )
}