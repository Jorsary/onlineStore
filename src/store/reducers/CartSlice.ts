import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, IProduct } from "../../models/models";
import { getCartFromLS } from "../../utils/getCartFromLS";

const initialState: CartState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.cartQuantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          cartQuantity: 1,
        });
      }
      state.cartTotal += 1;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.cartQuantity -= 1;
        if (item.cartQuantity === 0) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );

          state.cartItems = nextCartItems;
        }
      }
      state.cartTotal -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action: PayloadAction<IProduct>) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        state.cartTotal -= item.cartQuantity;
      }

      const nextCartItems = state.cartItems.filter(
        (cartItems) => cartItems.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals(state) {
      let quantity = state.cartItems.reduce(
        (acc, item) => (acc += item.cartQuantity),
        0
      );
      state.cartTotal = quantity;
    },

    cartShow: (state) => {
      state.cartOpened = true;
    },
    cartHide: (state) => {
      state.cartOpened = false;
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  cartHide,
  cartShow,
  removeItem,
  decreaseCart,
  getTotals,
} = cartSlice.actions;
