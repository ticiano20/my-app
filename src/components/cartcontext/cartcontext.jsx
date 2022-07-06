import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartContextFunction = () => {
  return useContext(CartContext);
};

export const CarritoContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [counts, setCounts] = useState(0);

  const InCart = (id) => {
    const esIgual = cart.find((product) => product.id === id);
    return esIgual === undefined ? false : true;
  };

  const AddToCart = (obj) => {
    if (!InCart(obj.id)) {
      setCart([...cart, obj]);
    } else {
      cart.forEach((product, index) => {
        if (product.id === obj.id) {
          cart[index].amount = product.amount + obj.amount;
          setCart([...cart]);
        }
      });
    }
  };

  const RemoveItem = (id) => {
    const deleteItem = cart.filter((product) => product.id !== id);
    setCart(deleteItem);
  };

  console.log(cart);

  const ClearCart = () => {
    setCart([]);
    setCounts(0);
  };

  const handleAumentar = () => {
    const value = counts + 1;
    setCounts(value);
  };
  const handleRestar = () => {
    if (counts > 0) {
      const value = counts - 1;
      setCounts(value);
    }
  };

  const Total = () => {
    let total = 0;
    cart.forEach(({ amount, price }) => {
      total = total + amount * price;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        AddToCart,
        ClearCart,
        InCart,
        handleAumentar,
        handleRestar,
        counts,
        RemoveItem,
        Total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
