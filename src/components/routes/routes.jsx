import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ItemListContainer from "../itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "../itemdetailcontainer/ItemDetailContainer";
import BarNav from "../barnav/barnav";

const Routing = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BarNav/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Routing;