import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React from "react";
  
  const CartItem = ({ ...prod }) => {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="center">Unidades</TableCell>
                <TableCell align="center">Producto</TableCell>
                <TableCell align="center">Precio</TableCell>
                <TableCell align="center">Imagen</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={prod.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {prod.name}
                </TableCell>
                <TableCell align="center">{prod.amount}</TableCell>
                <TableCell align="center">{prod.title}</TableCell>
                <TableCell align="center">{prod.price}</TableCell>
                <TableCell align="center">
                  <img src={prod.image} alt={prod.title} width={30} height={30} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default CartItem;
  