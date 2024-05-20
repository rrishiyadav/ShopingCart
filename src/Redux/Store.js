import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const store = configureStore({
    reducer:{
        infoCart : ProductSlice
    }
})

export default store;