import React from 'react';
import { useEffect,useState } from 'react';
import {ItemList} from './ItemList.js';
import ItemCount from './ItemCount';
import { getProducts, listadoProductos } from "./async/asyncMock"
import { ItemDetail } from './ItemDetail.js';
import { ItemDetailContainer } from './ItemDetailContainer.jsx';


function ItemListContainer (props){
    console.log (props);
    const [item, setItem]= useState([])
    useEffect(()=>{
        getProducts()
            .then(res => setItem(res))
            .catch(err => console.log(err))
    },[])
    return(
        <div className='it'>
        <h1 style={{backgroundColor:'grey', fontSize:'50px'}}>Productos</h1>
        <br></br>
        {item.length > 0 ? 
       <ItemList productos={item} />
                : <div>Cargando...</div>
            }
            
        </div>)
};
export default ItemListContainer;