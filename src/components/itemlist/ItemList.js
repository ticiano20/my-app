import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item.js';
// import ItemCount from '../itemcount/ItemCount.js';


export const ItemList = ({ productos }) => {

    console.log("productos", productos)

    return (
        <div>
            <Link to="/unProducto.id">
            {
                // productos.map((unProducto) => (<Item key={unProducto.id} category={unProducto.category} img={unProducto.img} name={unProducto.name} />))
                 productos.map((unProducto) => (<ItemList key={unProducto.id} category={unProducto.category} />))
         
            }
            </Link>
        </div>
    )
}
export default ItemList;