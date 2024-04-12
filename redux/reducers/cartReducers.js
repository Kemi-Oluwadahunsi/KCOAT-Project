// // reducers/cartReducer.js

// import { createSlice } from "@reduxjs/toolkit";
// // import * as actionTypes from "../actionTypes"; // Assuming you have actionTypes defined

// // Initial state
// const initialState = {
//   cartItems: [],
// };

// // Create a slice for cart-related actions
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       state.cartItems.push(action.payload);
//     },
//     removeFromCart(state, action) {
//       state.cartItems = state.cartItems.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
