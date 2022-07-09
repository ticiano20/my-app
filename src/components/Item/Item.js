import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
// import "./Item.css";

const Item = ({ products }) => {
  return (
    <div className="item">
      <NavLink to={"/item/" + products.id}  style={{ textDecoration: 'none'}}>
        <Card sx={{ maxWidth: 350 }}>
          <Typography gutterBottom variant="h5" component="div">
            {products.title}
          </Typography>
          <CardMedia
            component="img"
            height={300}
            image={products.image}
            alt={products.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {products.price}
            </Typography>
          </CardContent>
        </Card>
      </NavLink>
    </div>
  );
};

export default Item;
