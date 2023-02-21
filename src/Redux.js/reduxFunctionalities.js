import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Components/cart";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store;