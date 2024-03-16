import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from "@mui/material";
import productService from "../../services/ProductsService";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
  },
});

const UpdateProduct = () => {
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("");
  const [breed, setBreed] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   productService.getSingleProduct(id).then((data) => {
  //     // setPrice(data.products.price);
  //     setBreed(data.products.breed);
  //     setColor(data.products.color);
  //   });
  // }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
   
    
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("price", price);
    formData.append("breed", breed);
    formData.append("color", color);
    formData.append("image", image);

    productService
      .updateProduct(id, formData)
      .then((data) => {
        console.log(data);
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}></Grid>

      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color="primary" align="center" gutterBottom>
            Update New Animal
          </Typography>
        </ThemeProvider>

        <Box
          sx={{
            border: 1,
            borderRadius: 4,
            width: "100%",
            height: "80%",
            backgroundColor: "#FFDAB9",
            borderColor: "primary.main",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              marginBottom: "16px",
              marginLeft: "100px",
              backgroundColor: "white",
              width: "80%",
            }}
          />

          <InputLabel style={{ marginBottom: "16px", marginLeft: "40px" }}>
            Breed
          </InputLabel>
          <Select
            value={breed}
            label="Breed"
            fullWidth
            style={{
              marginBottom: "16px",
              marginLeft: "100px",
              backgroundColor: "white",
              width: "80%",
            }}
            onChange={(e) => setBreed(e.target.value)}
          >
            <MenuItem value="Rajanpuri">Rajanpuri</MenuItem>
            <MenuItem value="Twenty">Twenty</MenuItem>
            <MenuItem value="Thirty">Thirty</MenuItem>
          </Select>

          <InputLabel style={{ fontWeight: "bold" }}>Color</InputLabel>
          <Select
            value={color}
            label="Color"
            fullWidth
            style={{
              marginBottom: "16px",
              marginLeft: "100px",
              backgroundColor: "white",
              width: "80%",
            }}
            onChange={(e) => setColor(e.target.value)}
          >
            <MenuItem value="White">White</MenuItem>
            <MenuItem value="Twenty">Twenty</MenuItem>
            <MenuItem value="Thirty">Thirty</MenuItem>
          </Select>

          <InputLabel>Image</InputLabel>
          <TextField
            name="image"
            type="file"
            fullWidth
            inputProps ={{ multiple:true}} 
            onChange={handleImageChange}
            style={{
              marginBottom: "16px",
              marginLeft: "100px",
              backgroundColor: "white",
              width: "80%",
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Grid>

      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default UpdateProduct;