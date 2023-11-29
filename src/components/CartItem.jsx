import React, { useState} from "react";

import { StarFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeToCart } from "../features/ProductSlicer";


const CartItem = ({ product }) => {

  const [fullDescription, setFullDescription] = useState(false);

  const dispatch = useDispatch()
  


  const handleShowMore = () => {
    setFullDescription(!fullDescription);
  };
  return (
    <div className="card mt-2 px-md-5 py-md-4">
      <div className="row g-0">
        <div className="col-md-6 col-lg-3">
          <img
            className="card-img-top rounded mx-auto d-block mt-2"
            src={product.images[0]}
            alt="..."
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className='sub-title m-0'>Brand: {product.brand}</p>
            <div>
              <span className="text-success">Instock :</span>{" "}
              {product.stock}
            </div>
            <div className=" small  mb-2">
              ratings :{" "}
              {Array.from(
                { length: Math.round(product.rating) },
                (_, i) => (
                  <StarFill className={`text-warning`} key={i} />
                )
              )}
            </div>
            <div>
              <h6 className="mb-0">Description</h6>
              <small className="card-text d-block">
                {fullDescription
                  ? product.description
                  : `${product.description.slice(0, 100)}...`}
              </small>
              {!fullDescription && (
                <button
                  className="btn btn-link m-0 p-0"
                  onClick={handleShowMore}
                  style={{ fontSize: "12px" }}
                >
                  Show More
                </button>
              )}
              {fullDescription && (
                <button
                  className="btn btn-link m-0 p-0"
                  onClick={handleShowMore}
                  style={{ fontSize: "12px" }}
                >
                  Show Less
                </button>
              )}
            </div>

            <p className="card-text">
           
            </p>
          </div>
        </div>
        <div className="col-md-12 col-lg-3 text-end d-flex flex-column justify-content-between">
          <div className="mx-2">
            <div className="me-lg-2  pe-lg-4 ">
              <span className="me-4">Price:</span>$
              {product.price}
            </div>
            <div className="mt-2">
              <span className="">Qty:</span>
              <span className="mx-lg-3">
                <button className="btn btn-sm btn-outline-dark"
                onClick={()=> dispatch(decreaseQuantity(product))}
                disabled={product.quantity <=1}
                >-</button>
                <span className="mx-2">{product.quantity}</span>
                <button className="btn btn-sm btn-outline-dark"
                onClick={()=>dispatch(increaseQuantity(product))}
                >+</button>
              </span>
            </div>
          </div>
          <div className="m-3">
            <button className="btn btn-danger" onClick={()=>dispatch(removeToCart(product))} >remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
