import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ProductsState } from "../../models/IProduct";
import { fetchProducts } from "./ActionCreators";



const initialState: ProductsState = {
  products: [],
  isLoading: true,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = true;
    }, 
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
