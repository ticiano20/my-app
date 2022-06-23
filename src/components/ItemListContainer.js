import React from 'react';
import { useEffect,useState } from 'react';
import {ItemList} from './ItemList.js';
import ItemCount from './ItemCount';
import { getProducts, listadoProdutos } from "./async/asyncMock"


function ItemListContainer (props){
    console.log (props);
    const [items, setItems]= useState([])
    useEffect(()=>{
        getProducts()
            .then(res => setItems(res))
            .catch(err => console.log(err))
    },[])
    return(
        <div className='it'>
        <h1 style={{backgroundColor:'grey', fontSize:'50px'}}>Productos</h1>
        <ItemCount/>
        {items.length > 0 ? <ItemList productos={items} />
                : <div>Cargando...</div>
            }
        </div>)
};
export default ItemListContainer;