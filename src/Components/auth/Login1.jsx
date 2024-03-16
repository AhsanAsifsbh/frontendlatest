import React from "react";
import { Grid, TextField, Button, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import userService from "../../services/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

import CssBaseline from "@mui/material/CssBaseline";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

import Box from "@mui/material/Box";
import backgroundImage from "C:\\Users\\Irfan Asif\\Downloads\\image1.jpg";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const theme = createTheme();

const Login1 = (props) => {
  const history = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          width: "80vw",
          padding: "10px",
          margin: "auto",
          marginTop: "20px",
          border: "1px solid black",
          background: "#FFDAB9",
          borderRadius: "20px",
        }}
      >
        <Grid container component="main" sx={{ width: "100%" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            {/* Form Section */}
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In 
              </Typography>
              <Box
                component="form"
                sx={{
                  mt: 1,
                  width: "100%",
                }}
              >
        
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={email}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

<FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    userService
                    .login(email, password)
                    .then((data) => {
                      console.log(data);
                      window.location.href = "/";
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>  <Link href="#" variant="body2">
                      Forgot password?
                    </Link></Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign U"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={false}
            sm={6}
            md={6}
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100%",
            }}
          />
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Login1 ;
