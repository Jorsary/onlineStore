import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../hooks/redux";
import { fetchProducts } from "./ActionCreators";

export interface FilterState {
  category: string;
}

const initialState: FilterState = {
  category: "",
};



export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterProducts: (state, action: PayloadAction<number>) => {
      if (action.payload===1) {
        state.category="?filter=men'sclothing"
      }
      if (action.payload===2) {
        state.category="?filter=women's clothing"
      }
      if (action.payload===3) {
        state.category="?filter=electronics"
      }
      if (action.payload===4) {
        state.category="?filter=jewelery"
      }
      
    },
  },
});

export default filterSlice.reducer;

export const { filterProducts } = filterSlice.actions;
