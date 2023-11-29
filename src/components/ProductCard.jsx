import React from 'react'

import { StarFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../features/ProductSlicer'

const ProductCard = ({product}) => {
  
    const dispatch = useDispatch()

    const {cart} = useSelector(state=>state.products)

    const isInCart = () => product && cart.some((item) => item.id === product.id);

    const handleClick = () => isInCart() ? dispatch(removeToCart(product)) : dispatch(addToCart(product)) 

  return (
    <div className="col mb-5">
    <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{product.sale}</div>
        <img className="card-img-top rounded mx-auto d-block mt-2" src={product.images[0]}  alt="..."  style={{ width:'250px',height: '200px' }} />
        <hr className='m-0 mt-3 p-0'/>
        <div className="card-body p-4">
            <div className="text-center">

                <h6 className="">{product.title}</h6>
                <p className='sub-title'>{product.brand}</p>

                <div className="d-flex justify-content-center small text-warning mb-2">
                    {
                        Array.from({ length: Math.round(product.rating) }, (_, i) => <StarFill key={i} />)
                    }
                </div>

                    <span className='h6' >${product.price}</span>

            </div>
        </div>
        <div className="card-footer pb-3 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
            <button className={isInCart() ? "btn btn-danger mt-auto" : "btn btn-outline-dark mt-auto"} onClick={handleClick}>
                    {isInCart() ? "Remove from cart" : "Add to cart"}
                </button> 
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductCard