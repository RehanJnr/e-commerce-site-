import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Cart from "../Cart";
import Products from "../Products";
import MoreInfo from "../MoreInfo";
import { ProductProvider } from "../ProductContext";

function UserView() {
  return (
    <div className="UserView">
      <header className="App-header">
        <ProductProvider> 
          <Routes>
          <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/products" element={<Products></Products>} />
            <Route path="/more/:id" element={<MoreInfo></MoreInfo>}></Route>
          </Routes>
        </ProductProvider>
      </header>
    </div>
  );
}

export default UserView;
