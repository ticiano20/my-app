import React from 'react';
import './App.css';
import BarNav from '../src/components/barnav.js';
import ItemListContainer from './components/ItemListContainer';
import CartWid from './components/cartwidget';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <BarNav/>
    <CartWid/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
    );
};
export default App;