import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { setTotal } from "../features/ProductSlicer";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, total } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTotal());
  }, [cart, dispatch]);
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row justify-content-center mt-4">
        <div className="h2 m-0 mt-4 ms-5">Shopping Cart</div>
        <div className="col-md-9" style={{ backgroundColor: "none" }}>
          <div className="container">
            {cart.length > 0 ? (
              cart.map((item, index) => <CartItem product={item} key={index} />)
            ) : (
              <p className="h6 m-0 mt-4 ms-5">No items in the cart</p>
            )}
          </div>
        </div>
        <div className="col-md-3  d-sm-flex justify-content-sm-center align-self-sm-start">
          <div className="card  mt-2 pt-2" style={{ maxWidth: "18rem" }}>
            <div className="card-header  text-center">Sub Total</div>
            <div className="card-body">
              <h5 className="card-title text-center"> &#36; {total}</h5>
              {total === 0 ? (
                <button
                  type="button"
                  className="btn btn-success btn-block btn-lg"
                  data-mdb-ripple-color="dark"
                >
                  Proceed to buy
                </button>
              ) : (
                <Link className="btn" to="/confirmed">
                  <button
                    type="button"
                    className="btn btn-success btn-block btn-lg"
                    data-mdb-ripple-color="dark"
                  >
                    Proceed to buy
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link className="btn" to="/allproducts">
          <button className="btn btn-light">All Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
