import React from 'react';
import './itemList.css';

function ItemListContainer (props){
    console.log (props);
    return(
        <div className='it'>
    <h1 style={{backgroundColor:'grey', fontSize:'50px'}}>Productos</h1>
        </div>)

};
export default ItemListContainer;