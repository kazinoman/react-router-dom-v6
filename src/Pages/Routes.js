import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Welcome from "./Welcome";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome/" element={<Welcome />}>
        <Route
          path="hi"
          element={
            <>
              <h1>Hi there!!</h1>
            </>
          }
        />
        <Route path="noman" element={<h1>My name is noman!</h1>} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Product/:pID" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
