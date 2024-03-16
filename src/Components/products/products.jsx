import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useNavigate } from "react-router-dom";
import { Grid, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import productService from "../../services/ProductsService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const history = useNavigate();

  const getData = () => {
    productService
      .getProducts()
      .then((data) => {
        // Check if 'products' property exists in data and if it is an array
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Invalid data structure received from API:", data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []); // Use an empty dependency array to run the effect only once on mount

  const handleNewProductClick = () => {
    history("/products/new");
  };

  return (
    <div>
      <h1>Products</h1>
      <Fab color="primary" aria-label="add" onClick={handleNewProductClick}>
        <AddIcon />
      </Fab>
      {products.length === 0 ? (
        <p>There are no Products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
