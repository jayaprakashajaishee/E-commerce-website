import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { BiCartAlt } from "react-icons/bi";

function ProductCard({ data }) {
  return (
    <Card
      sx={{
        height: 560,
        width: 345,
        margin: "auto",
        bgcolor: "#323232",
        color: "#EDEDED",
      }}
      id={data.id}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={data.filename}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent
        sx={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="bold"
          >
            {data.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            category: {data.type}
          </Typography>
          <Typography variant="body2">{data.description}</Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant="h6" component="div">
            Price: {data.price} Rs
          </Typography>
          <Rating name="read-only" value={data.rating} readOnly />
          <Box>
            <Button
              variant="contained"
              sx={{
                color: "#EAEAEA",
                width: "100%",
                marginTop: "5px",
                bgcolor: "black",
                ":hover": { bgcolor: "#FF2E63" },
              }}
              endIcon={<BiCartAlt />}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
