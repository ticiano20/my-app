import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartcontext/cartcontext";
import ItemCount from "../itemcount/ItemCount";

const ItemDetail = ({ detail }) => {
  const { AddToCart, ClearCart, counts, RemoveItem } = useContext(CartContext);

  const agregarAlCarrito = () => {
    const data = { ...detail, amount: counts };
    AddToCart(data);
    console.log("Producto agregado al carrito con éxito");
  };

  const eliminarDelCarrito = (id) => {
    RemoveItem(id);
    console.log("Producto quitado del carrito");
  };

  return (
    <div>
      <h1>{detail.title}</h1>
      <h2>{detail.price}</h2>
      <img src={detail.image} alt={detail.id} width={300} height={300} />
      <ItemCount />
      <Button onClick={agregarAlCarrito}>Add to cart</Button>
      <Button onClick={eliminarDelCarrito}>Delete from cart</Button>
      <Button variant="outlined" color="error" onClick={ClearCart}>
        Vaciar Carrito
      </Button>
      <Link to="/cartview" style={{ textDecoration: "none" }}>
        <Button variant="outlined" color="error">
          Finalizar compra
        </Button>
      </Link>
    </div>
  );
};

export default ItemDetail;
