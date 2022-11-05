import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart/cartSlice";
import cartUiReducer from "../redux/cart/cartUiSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartUi: cartUiReducer,
    },
});
