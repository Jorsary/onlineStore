import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProducts, ProductsState } from "../../models/models";
import { fetchProducts } from "./ActionCreators";

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: "",
  category: "",
  sortBy: "price",
  order: "",
  page: 1,
  limit: 8,
  count: 0,
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
        state.page=1
      }
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      state.order = action.payload;
    },
    setPages: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCount: (state,action: PayloadAction<number>) => {
      state.count=action.payload
    }
  },

  extraReducers: {
    [fetchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProducts>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload.items;
      state.count = action.payload.count
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

export const { filterProducts, sortProducts, setPages } =
  productSlice.actions;
