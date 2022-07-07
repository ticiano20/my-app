// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import React from 'react';
// import CartWid from '../cartwidget/cartwidget';
// // import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Inicio from '../pages/inicio';
// import Productos from '../pages/productos';
// import Contactos from '../pages/contact';
// import Nosotros from '../pages/nosotros';
 
// function BarNav() {
//   return (
//     <>
//     <Navbar bg="dark" variant="ligth" expand="lg" sticky="top">
//        <Container>
//         <Navbar.Brand href="/">IMPORTACIONES</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to={<Inicio/>}>Inicio</Nav.Link>
//             <Nav.Link as={Link} to={<Productos/>}>Productos</Nav.Link>
//             <NavDropdown title="Nosotros" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to={<Nosotros/>}>Conocenos</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to={<Contactos/>}>Contactos</NavDropdown.Item>          
//             </NavDropdown>
//           </Nav>
//           <CartWid/>
//          </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     {/* <Section>
//       <Outlet></Outlet>
//     </Section> */}
   
//    </>
 
//   );
// }
// export default BarNav;
import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../cartcontext/cartcontext";

const ResponsiveAppBar = () => {
  const { cart } = useContext(CartContext);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ECOMMERCEReact
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <MenuItem
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </MenuItem>
          </Box>
          {/* <AddIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/category/jewelery"} style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Joyería
              </Button>
            </Link>
            <Link
              to={"/category/electronics"}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Electrónica
              </Button>
            </Link>
            <Link
              to={"/category/men's clothing"}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Ropa masculina
              </Button>
            </Link>
            <Link
              to={"/category/women's clothing"}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Ropa femenina
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Badge
                  badgeContent={cart.reduce(
                    (acc, prod) => acc + prod.amount,
                    0
                  )}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <MenuItem
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>
                <Typography textAlign="center">NavBar</Typography>
              </MenuItem>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;