import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
// import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <NavLink to={"/item/" + producto.id}  style={{ textDecoration: 'none'}}>
        <Card sx={{ maxWidth: 350 }}>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <CardMedia
            component="img"
            height={300}
            image={producto.image}
            alt={producto.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {producto.price}
            </Typography>
          </CardContent>
        </Card>
      </NavLink>
    </div>
  );
};

export default Item;
