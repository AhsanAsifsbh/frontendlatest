import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import userService from "../services/UserService";;
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
  },
});

const linkStyle = {
  color: theme.palette.primary.main,
  paddingRight: "1rem",
};

const TopMenu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/products" style={linkStyle}>
            Products
          </Link>
          <Link to="/products/new" style={linkStyle}>
            New Products
          </Link>
          <Link to="/contact-us" style={linkStyle}>
            Contact Us
          </Link>




{/* 
{userService.isLoggedIn()?


<>        
                <Link to="/login" style={linkStyle}>
                  Login
                </Link>
                <Link to="/register" style={linkStyle}>
                  Register
                </Link>
           
                </>:<Button> Logout</Button>
  

} */}



{userService.isLoggedIn() ? (
            <>
              {/* Show logout button */}
              <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name}
          </Button>
            </>
          ) : (
            <>
              {/* Show login and register links */}
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
              <Link to="/register" style={linkStyle}>
                Register
              </Link>
            </>
          )}


          
         

        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
