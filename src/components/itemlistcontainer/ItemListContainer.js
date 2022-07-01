import React from 'react';
import { useEffect,useState } from 'react';
import {ItemList} from '../itemlist/ItemList.js';
// import ItemCount from '../itemcount/ItemCount';
import { getProducts, listadoProductos } from "../async/asyncMock"
// import { ItemDetail } from '../itemdetail/ItemDetail.js';
// import { ItemDetailContainer } from '../itemdetailcontainer/ItemDetailContainer.jsx';
import {Link} from 'react-router-dom';
import Item from '../Item/Item.js';

function ItemListContainer(listadoProductos) {
    
    const [item, setItem]= useState([])
    useEffect(()=>{
        
        getProducts()
            .then(res => setItem(res))
            .catch(err => console.log(err))
            
    },[]);
    return(
        <div className='it'>
            
        <h1 style={{backgroundColor:'grey', fontSize:'50px'}}>Productos</h1>
          
        <br></br>
       
        {item.length > 0 ? 
        <Link to="/">
       <ItemList productos={<Item/>} />
    
       </Link>
                : <div>Cargando...</div>
            }
            
           
        </div>)
};
export default ItemListContainer; 

// const ItemListContainer =({category,}) =>{
//     const [items, setItems]= useState([])
        
//     })
// }