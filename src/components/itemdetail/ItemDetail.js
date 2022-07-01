import React from "react";
import ItemCount from "../itemcount/ItemCount";
export const ItemDetail = ({ img, name, description }) => {
    return (
        <div className="fondo">
            <h1>{name}</h1>
            <h3 style={{fontSize:'75%'}}>{description}</h3>
            <img src={img} alt={description} style={{width:'50%', height:'50%'}} />
             <ItemCount  /> 
            
        </div>
    )
}