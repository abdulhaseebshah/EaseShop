import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import ProductList from "../AllProducts/ProductList";
const Home = () => {
  return (
    <>
      <Banner />
      <ProductList />
    </>
  );
};

export default Home;
