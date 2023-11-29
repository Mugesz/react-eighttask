import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Confirmed = () => {
  return (
    <div>
      <Header />
      <div className="confirmed text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFJTnUgpV2i_1ZlE99SIuoMqyszJC2NP_nQ&usqp=CAU"
          alt=""
        />
        <h1> !!! Your Order is confirmed Successfully !!!</h1>
      </div>
      <br />
      <br />
      <br />

      <div className="text-center">
        <Link className="btn" to="/allproducts">
          <h3 className="btn btn-warning">Go to All Products</h3>
        </Link>

        <Link className="btn" to="/cart">
          <h3 className="btn btn-danger">Go to Cart</h3>
        </Link>
      </div>

      <br />
    </div>
  );
};

export default Confirmed;
