// import React from "react";
// import { Grid, Button, Card, CardContent, CardMedia } from "@mui/material";
// import productService from "../../services/ProductsService";

// import { useNavigate } from "react-router-dom"; // Import useNavigate
// const SingleProduct = (props) => {
//   const { product, onDelete, history } = props;
//   console.log(props);
//   const navigate = useNavigate();

//   const cardMediaStyle = {
//     objectFit: "cover",
//     width: "100%", // Ensure full width
//     minWidth: 200, // Set a minimum width for the image
//     height: 300, // Increased height to accommodate content
//   };

//   return (
//     <Grid item xs={3} sm={4} md={3}>
//       <Card>
//         <CardMedia
//           component="img"
//           alt="Product Image"
//           style={cardMediaStyle}
//           image={`http://localhost:4000/uploads/${product.images[1]}`}
//         />

//         <CardContent>
//           <h2>Name: {product.name}</h2>
//           <p>Product price: {product.price}</p>
//           <p>Breed: {product.breed}</p>
//           <p>Color: {product.color}</p>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={(e) => {
//               console.log("navigate to new product");

//               navigate("/products/update/" + product._id);
//             }}
//           >
//             Edit
//           </Button>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={(e) => {
//               productService
//                 .deleteProduct(product._id)
//                 .then((data) => {
//                   onDelete();
//                 })
//                 .catch((err) => {
//                   console.log(err);
//                 });
//             }}
//           >
//             Delete
//           </Button>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// export default SingleProduct; //





import React, { useState } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import productService from "../../services/ProductsService";
import { useNavigate } from "react-router-dom";

const SingleProduct = (props) => {
  const { product, onDelete } = props;
  const navigate = useNavigate();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          alt="Product Image"
          height="300"
       
          image={`http://localhost:4000/uploads/${product.images[selectedImageIndex]}`}
        />

        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography color="textSecondary">
            Product price: {product.price}
          </Typography>
          <Typography color="textSecondary">Breed: {product.breed}</Typography>
          <Typography color="textSecondary">Color: {product.color}</Typography>

          <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            {/* Display the row of small images at the bottom */}
            {product.images.map((image, index) => (
              <img
                key={index}
                src={`http://localhost:4000/uploads/${image}`}
                alt={`Product Image ${index + 1}`}
                style={{
                  width: "60px",
                  height: "60px",
                  marginRight: "5px",
                  cursor: "pointer",
                  border:
                    index === selectedImageIndex ? "2px solid #1976D2" : "none",
                }}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/products/update/${product._id}`)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              productService
                .deleteProduct(product._id)
                .then(() => onDelete())
                .catch((err) => console.log(err));
            }}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
