import { Button, createTheme, ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cartitem/cartitem";
import { CartContext } from "../components/cartcontext/cartcontext";

const CartView = () => {
  const { cart, ClearCart, Total } = useContext(CartContext);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  if (cart.length === 0) {
    return (
      <div>
        <h2>Carrito Vacío</h2>
        <Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            Ver productos
          </Link>
        </Button>
      </div>
    );
  }
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <h1>CartView</h1>
        <h2>Proceso de finalizar compra</h2>
        {cart.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
        <div>
          <h2>Total: ${Total(cart)}</h2>
        </div>
        <div>
          <h1>Checkout</h1>
          <Button variant="contained" color="success">
            Finalizar compra
          </Button>
          <Button variant="outlined" color="error" onClick={() => ClearCart()}>
            Vaciar carrito
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default CartView;
