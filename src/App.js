import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Header from "./Components/Header/Header";
import ProductList from "./Screens/AllProducts/ProductList";
import ProductDetail from "./Screens/ProductDetail/ProductDetail";
import CartScreen from "./Screens/CartScreen/CartScreen";
import NotFound from "./Screens/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ProductList/" element={<ProductList />} />
        <Route exact path="/ProductDetails/:id" element={<ProductDetail />} />
        <Route exact path="/CartList/" element={<CartScreen />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
