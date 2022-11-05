import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name: "cartUi",
    initialState: { cartIsVisible: false },
    reducers: {
        toggleCartUi(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export const { toggleCartUi } = cartUiSlice.actions;
export const selectCartIsVisible = (state) => state.cartUi.cartIsVisible;
export default cartUiSlice.reducer;
