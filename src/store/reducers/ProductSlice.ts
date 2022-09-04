import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IProduct, ProductsState } from "../../models/IProduct";
import { fetchProducts } from "./ActionCreators";

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: "",
  category: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.category = "";
      } else {
        state.category = "?category=" + action.payload.toString();
      }
    },
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
      state.products = [];
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;

export const { filterProducts } = productSlice.actions;
