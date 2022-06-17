import React, { useState } from "react";

const ItemCount =() => {
    const [counter, setCounter, stock]= useState (0);
    const uno =() =>{
        setCounter(counter + 1)
    };
    const dos = () => {
        setCounter(counter - 1)
    };
    let tres =(stock===5); 
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '300%',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '-15%',
          }}>
            <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '20vh',
      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '50%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'black',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={uno}>Agregar</button>
        <button style={{
          fontSize: '50%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'black',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={dos}>Quitar</button>
          <button style={{
          fontSize: '50%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'black',
          borderRadius: '8%',
          color: 'white',
        }}onClick={tres}>Añadir al Carrito</button>
      </div>
    </div>
 
    );

};
export default ItemCount;