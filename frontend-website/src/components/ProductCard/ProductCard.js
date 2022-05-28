import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import {BiCartAlt} from "react-icons/bi"


function ProductCard({data}) {
  return (
    <Card sx={{ width: 345 }} id={data.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={data.filename}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          category: {data.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Price: {data.price} Rs
        </Typography>
        <Rating name="read-only" value={data.rating} readOnly />
        <Box>
          <Button variant="contained" sx={{width: "100%", marginTop: "5px"}} endIcon={<BiCartAlt />} >Add to cart</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
