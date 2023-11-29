import { createSlice } from "@reduxjs/toolkit";
import { product_list } from "../productLsit";

export const ProductSlicer = createSlice({
    name:'products',
    initialState:{
        products:product_list,
        loading:false,
        cart:[],
        total : 0
        
    },
    reducers:{

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
          },
          removeToCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
          },
          increaseQuantity: (state, action) => {
            state.cart = state.cart.map((data) =>
              data.id === action.payload.id
                ? { ...data, quantity: data.quantity + 1 }
                : data
            );
          },
          decreaseQuantity: (state, action) => {
            state.cart = state.cart.map((data) =>
              data.id === action.payload.id
                ? { ...data, quantity: data.quantity - 1 }
                : data
            );
          },
          setTotal: (state) => {
            state.total = state.cart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            );
          },
          
    
        
    }
})


export const {setProduct,addToCart,removeToCart,increaseQuantity,decreaseQuantity,setTotal} = ProductSlicer.actions