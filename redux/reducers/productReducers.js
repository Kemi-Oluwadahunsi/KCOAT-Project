// import { createSlice } from "@reduxjs/toolkit";

// // Initial state
// const initialState = {
//   product: null,
//   loading: true,
//   quantity: 1,
// };

// // Create a slice for product-related actions
// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     fetchProductSuccess(state, action) {
//       state.product = action.payload;
//       state.loading = false;
//     },
//     updateQuantity(state, action) {
//       state.quantity = action.payload;
//     },
//     clearProduct(state) {
//       state.product = null;
//       state.loading = true;
//       state.quantity = 1;
//     },
//   },
// });


// export const { fetchProductSuccess, updateQuantity, clearProduct } =
//   productSlice.actions;
// export default productSlice.reducer;
