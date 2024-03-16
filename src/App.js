import React from "react";
import TopMenu from "./Components/TopMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Products from "./Components/products/products";
import ContactUs from "./Components/ContactUs";

import NotFound from "./Components/NotFound";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

import RegisterCopy from "./Components/auth/Login1";
import Login1 from "./Components/auth/Login1";
import NewProduct from "./Components/products/NewProduct";
import UpdateProduct from "./Components/products/UpdateProduct";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router> 
      <div>
      <ToastContainer />
        <TopMenu />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login1" element={<Login1 />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/products/update/:id" element={<UpdateProduct />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
