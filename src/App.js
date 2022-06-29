import React from 'react';
import './App.css';
import BarNav from './components/barnav/barnav.js';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import CartWid from './components/cartwidget/cartwidget';
import { ItemDetailContainer } from './components/itemdetailcontainer/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
/*import category from './components/itemlistcontainer/ItemListContainer';
import Productos from './components/pages/productos';
import Contactos from './components/pages/contact';
import Nosotros from './components/pages/nosotros';*/
import { Outlet,Link } from 'react-router-dom';
import Inicio from './components/pages/inicio';
import Productos from './components/pages/productos';
import Contactos from './components/pages/contact';
import Nosotros from './components/pages/nosotros';



function App() {
  return (
    <>
    <Router>
    <BarNav/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:id' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='*' element={<Navigate replace to="/"/>}/>
    </Routes>
    </Router>

    
    </>
    );
};
export default App;