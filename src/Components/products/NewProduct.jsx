import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import productService from "../../services/ProductsService";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
  },
});

const NewProduct = (props) => {
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState("");
  const [color, setColor] = useState("");
  const [breed, setBreed] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleAddNewProduct = () => {
    if (!price && !color && !breed ) {
      setError("Please fill in all fields");
      return;
    }

    let missingFields = [];

    if (!price) {
      missingFields.push("Price");
    }


    if (!breed) {
      missingFields.push("Breed");
    }

    if (!color) {
      missingFields.push("Color");
    }

  

    // if (!image) {
    //   missingFields.push("Image");
    // }


    if (missingFields.length > 0) {
      setError(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    const formData = new FormData();

    formData.append("price", price);
    formData.append("breed", breed);
    formData.append("color", color);
    // formData.append("images", images);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  

    productService
      .addProduct(formData)
      .then((data) => {
        console.log("Server response data:", data);
        history("/products");
      })
      .catch((err) => {
        console.error("Error adding new product:", err);
      });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}></Grid>

      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color="primary" align="center" gutterBottom>
            Add New Animal
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
            onChange={(e) => setImages(e.target.files)}
            style={{
              marginBottom: "16px",
              marginLeft: "100px",
              backgroundColor: "white",
              width: "80%",
            }}
          />
        </Box>

        {error && (
          <Typography color="error" variant="body1">
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "250px" }}
          onClick={handleAddNewProduct}
        >
          Add Animal
        </Button>
      </Grid>

      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default NewProduct;
