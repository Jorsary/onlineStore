import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../../components/Cart";
import { IProduct } from "../../models/IProduct";

interface CartState {
  cartItems: IProduct[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.cartItems.push({
        ...action.payload
      });
    },
  },
});

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;

