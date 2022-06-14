import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import CartWid from './cartwidget';




function BarNav() {
  return (
    
    <Navbar bg="ligth" variant="ligth" expand="lg" sticky="top">
       
      <Container>
        <Navbar.Brand href="#home">IMPORTACIONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./index.html">Inicio</Nav.Link>
            <Nav.Link href="./prodcutos">Productos</Nav.Link>
            <NavDropdown title="Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="./nosotros.html">Conocenos</NavDropdown.Item>
              <NavDropdown.Item href="./contacto.html">Contacto</NavDropdown.Item>           
            </NavDropdown>
          </Nav>
          
            <CartWid/>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarNav;
