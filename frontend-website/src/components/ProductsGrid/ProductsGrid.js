import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";
import { onGetProducts } from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function ProductsGrid() {
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetProducts());
  }, []);

  return loading ? (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "#212121" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  ) : error ? (
    <div style={{ paddingTop: 13 }}>Error</div>
  ) : (
    <Box sx={{ padding: 8, bgcolor: "#212121", paddingTop: 13 }}>
      <Grid container spacing={2}>
        {products.map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Box sx={{ display: "flex", height: "100%", width: "auto" }}>
              <ProductCard data={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsGrid;
