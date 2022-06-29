import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import CartWid from '../cartwidget/cartwidget';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Outlet,Link } from 'react-router-dom';
import Inicio from '../pages/inicio';
import Productos from '../pages/productos';
import Contactos from '../pages/contact';
import Nosotros from '../pages/nosotros';
 
function BarNav() {
  return (
    <Navbar bg="dark" variant="ligth" expand="lg" sticky="top">
       <Container>
        <Navbar.Brand href="#home">IMPORTACIONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={<Inicio/>}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={<Productos/>}>Productos</Nav.Link>
            <NavDropdown title="Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={<Nosotros/>}>Conocenos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={<Contactos/>}>Contactos</NavDropdown.Item>          
            </NavDropdown>
          </Nav>
          <CartWid/>
         </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
 
  );
}
export default BarNav;