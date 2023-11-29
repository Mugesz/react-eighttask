import { configureStore } from "@reduxjs/toolkit";
import { ProductSlicer } from "./features/ProductSlicer";

export const store = configureStore({
    reducer:{
        products: ProductSlicer.reducer
    }
})