import React from 'react';
import './App.css';
import BarNav from '../src/components/barnav.js';
import ItemListContainer from './components/ItemListContainer';
// import { FaOpencart } from 'react-icons/fa';
import CartWid from './components/cartwidget';




function App() {
  
  return (
    <>
    <BarNav/>
    <CartWid/>
    
    <ItemListContainer/>
    <ItemListContainer/>
    </>
    
    );
    
};

export default App;

