import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ProductsState } from "../../models/IProduct";
import { fetchProducts } from "./ActionCreators";

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: "",
  category: "",
  sortBy: "price",
  order: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.category = "";
      } else {
        state.category = action.payload.toString();
      }
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      state.order=action.payload;
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

export const { filterProducts, sortProducts } = productSlice.actions;
