import React from 'react';
import './App.css';
import BarNav from './components/barnav/barnav.js';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
// import { ItemDetail } from './components/itemdetail/ItemDetail';
// import CartWid from './components/cartwidget/cartwidget';
import { ItemDetailContainer } from './components/itemdetailcontainer/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Inicio from './components/pages/inicio';
// import Productos from './components/pages/productos';
// import Contactos from './components/pages/contact';
// import Nosotros from './components/pages/nosotros';



function App() {
  return (
    <>
    <Router>
    <BarNav/>
    
    <Routes>
        <Route path="/" element={ <ItemListContainer />} />
        <Route path="/unProducto.id" element={<ItemListContainer /> } />  
        <Route path="/item.id" element={  <ItemDetailContainer />} />
        <ItemListContainer/>
        
    </Routes>
    </Router>

    
    </>
    );
};
export default App;