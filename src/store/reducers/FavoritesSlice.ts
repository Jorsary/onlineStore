import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState, IProduct } from "../../models/models";
import { getFavoritesFromLS } from "../../utils/getCartFromLS";


const initialState: FavoritesState = getFavoritesFromLS()


export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleLikeItem:(state,action: PayloadAction<IProduct>) => {
      const item = state.favoritesItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        const nextCartItems = state.favoritesItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.favoritesItems = nextCartItems;
      } else {
        state.favoritesItems.push({
          ...action.payload
        });
      }
      
      localStorage.setItem("favoritesItems", JSON.stringify(state.favoritesItems));
    }
  }
})


export default favoritesSlice.reducer;

export const {
  toggleLikeItem
} = favoritesSlice.actions;