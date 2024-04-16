import { configureStore } from "@reduxjs/toolkit";
import shopsReducer from "../features/shops/shopsSlice";

const store = configureStore({
    reducer : {
        carts : shopsReducer
    }
})

export default store;