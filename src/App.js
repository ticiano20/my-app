// import React from 'react';
// import './App.css';
// import BarNav from './components/barnav/barnav.js';
// // import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
// // import { ItemDetail } from './components/itemdetail/ItemDetail';
// // import CartWid from './components/cartwidget/cartwidget';
// // import { ItemDetailContainer } from './components/itemdetailcontainer/ItemDetailContainer';
// // import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// // import Inicio from './components/pages/inicio';
// // import Productos from './components/pages/productos';
// // import Contactos from './components/pages/contact';
// // import Nosotros from './components/pages/nosotros';
// import Routing from './components/routes/routes';



// function App() {
//   return (
//     // <>
//     // <Router> 
//     //  <Routes>
//     //     <Route path ="/" element={<BarNav/>}/>
//     //     <Route path="/inicio" element={<Inicio/>}/>
//     //     <Route path="/productos" element={<Productos/>}/>
//     //     <Route path="/contactos" element={<Contactos/>}/>
//     //     <Route path="/nosotros" element={<Nosotros/>}/>
//     // </Routes> 
//     // </Router>
//     <>
//     <BarNav/>
//     <Routing/>

//     </>

    
    
//     );
// };
// export default App;
import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { CarritoContext } from "./components/cartcontext/cartcontext";
import Routing from "./components/routes/routes";
import {db} from '../src/components/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  // const [autos,setAutosData]= useState([]);
 
  //   const getAutos = async () =>{ 
  //   const q = query(collection(db, "autos"), where("capital", "==", true));
  //   const querySnapshot = await getDocs(q);
  //   const docs = [];

  //   querySnapshot.forEach ((doc)=>{
  //     docs.push ({...doc.data(), id:doc.id})
  //   })
  //   setAutosData(docs);
  // };
  // useEffect(() =>{
  //   getAutos();
  // },[]);
  return (
    <div className="App">
      
      <ThemeProvider theme={darkTheme}>
        <CarritoContext>
          <Routing />
        </CarritoContext>
      </ThemeProvider>
    </div>
  );
}

export default App;
