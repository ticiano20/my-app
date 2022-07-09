import React from "react";
import { Box, Grid } from "@mui/material";
import Item from "../Item/Item";

const ItemList = ({ categories }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {categories.map((products) => {
            return (
              <Grid key={products.id} item xs={12} sm={6} md={4} lg={3}>
                <Item key={products.id} products={products} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default ItemList;
