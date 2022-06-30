import React from 'react';
import Item from '../Item/Item.js';
import ItemCount from '../itemcount/ItemCount.js';


export const ItemList = ({ productos }) => {

    console.log("productos", productos)

    return (
        <div>
            {
                // productos.map((unProducto) => (<Item key={unProducto.id} category={unProducto.category} img={unProducto.img} name={unProducto.name} />))
                productos.map((unProducto) => (<Item key={unProducto.id} category={unProducto.category} />))
         
            }
        </div>
    )
}
export default ItemList;